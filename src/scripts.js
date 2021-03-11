var fs = require('fs');
const streamerInfo = require('../utils/streamerInfo.json');
const { GenerateFrameDataLinkFromMessage } = require('./frameDataLinksHandler.js');

class ScriptManager {
    constructor(client) {
        this.client = client;
    }

    CheckMessageScripts(tags, message, channel) {
        var hasAdminRights = IsUserStreamerOrMod(tags);

        UpdateArenaCode(this.client, message, channel, hasAdminRights);
        SayArenaInfo(this.client, message, channel);

        UpdateBracket(this.client, message, channel, hasAdminRights);
        SayBracket(this.client, message, channel, hasAdminRights);

        SayHello(this.client, tags.username, message, channel);
        SayDoubleCaret(this.client, message, channel);
        SayNotLikeThis(this.client, message, channel);
        SayCharacterFrameData(this.client, message, channel);
        ShareDiscord(this.client, message, channel);
        Shame(this.client, message, channel);
        CorrectJaRule(this.client, message, channel);
        Shoutout(this.client, message, channel);
    }

    TriggerHostedScript(username, channel) {
        ThankHosting(this.client, username, channel);
    }

    TriggerRaidedScript(username, channel) {
        WelcomeRaid(this.client, username, channel);
    }
}

function CorrectJaRule(client, message, channel) {
    if (message.includes('ja rule')) {
        client.say(channel, `Did you mean K Rool?!`);
    }
}

function Shoutout(client, message, channel) {
    const parsedMessage = message.split(' ');
    if (parsedMessage[0] === '!so' && parsedMessage.length > 1) {
        const handle = parsedMessage[1].substring(1);
        client.say(channel, `Be sure to follow ${handle} at http://twitch.tv/${handle} !`);
    }
}

function ShareDiscord(client, message, channel) {
    if (message === '!discord') {
        client.say(channel, streamerInfo.discord);
    }
}

function Shame(client, message, channel) {
    const parsedMessage = message.split(' ');
    if (parsedMessage[0] === '!s' && parsedMessage.length > 1) {
        client.say(channel, `Shame, shame! ${parsedMessage[1]}`);
    }
}

function UpdateArenaCode(client, message, channel, hasAdminRights) {
    const parsedMessage = message.split(' ');
    if (parsedMessage[0] === '!updatearena') {
        if (parsedMessage.length === 3 && hasAdminRights) {

            var gameInfo = GetGameInfoJSON();
            gameInfo.arena_info = parsedMessage[1].toUpperCase().concat(' ', parsedMessage[2].toUpperCase());
            
            fs.writeFileSync(GetGameFilePath(), JSON.stringify(gameInfo));
            client.say(channel, 'Arena updated');
        }
        else {
            client.say(channel, 'Arena Update: incorrect parameters or not a mod');
        }
    }
}

function UpdateBracket(client, message, channel, hasAdminRights) {
    const parsedMessage = message.split(' ');
    if (parsedMessage[0] === '!updatebracket') {
        if (parsedMessage.length === 2 && hasAdminRights) {

            var gameInfo = GetGameInfoJSON();
            gameInfo.bracket = parsedMessage[1];
            
            fs.writeFileSync(GetGameFilePath(), JSON.stringify(gameInfo));
            client.say(channel, 'Bracket updated');
        }
        else {
            client.say(channel, 'Bracket Update: incorrect parameters or not a mod');
        }
    }
}

function SayBracket(client, message, channel) {
    if (message === '!bracket') {
        var gameInfo = GetGameInfoJSON();
        client.say(channel, gameInfo.bracket);
    }
}

function SayHello(client, username, message, channel) {
    if (message === '!hello' || message === '!hi') {
		client.say(channel, `@${username}, heya!`);
    }
}

function SayArenaInfo(client, message, channel) {
    if (message === '!arena') {
        var gameInfo = GetGameInfoJSON();
        client.say(channel, gameInfo.arena_info);
    }
}

function SayNotLikeThis(client, message, channel) {
    if (message === 'notlikethis') {
        client.say(channel, 'Oh noo, not like this!! NotLikeThis NotLikeThis NotLikeThis');
    }
}

function SayDoubleCaret(client, message, channel) {
    if (message === '^') {
        client.say(channel, '^^');
    }
}

function SayCharacterFrameData(client, message, channel) {
    const messageArray = message.split(' ');
    if (messageArray[0] == '!framedata') {
        const IsValidArenaCommand = messageArray.length > 1;
        const commandParameters = message.substring(11);
        
        if (!IsValidArenaCommand) {
            client.say(channel, 'Frame data parameters not recognized. Use `!framedata help` for more info');
            return;
        }

        if (commandParameters === 'help') {
            client.say(channel, 'You can say !framedata followed by a character for their frame data info - e.g. `!framedata k rool`');
            return;
        }

        // At this point we assume that whatever was passed after !framedata is an attempt of a character name
        const messageToSend = GenerateFrameDataLinkFromMessage(message.substring(11));
        client.say(channel, messageToSend);
    }
    
}

function ThankHosting(client, username, channel) {
    client.say(channel, 'Woot! Thank you to ' + username + ' for hosting!')
}

function WelcomeRaid(client, username, channel) {
    client.say(channel, 'Noice! Welcome to ' + username + '`s crew! Thank you for raiding')
}

function IsUserStreamerOrMod(tags) {
    return tags.mod || tags['badges-raw'] === 'broadcaster/1';
}

function GetGameFilePath() {
    var appRoot = process.cwd();
    return appRoot + '/utils/gameInfo.json';
}

function GetGameInfoJSON() {
    // Reading json every time instead of doing 'require' so I can update
    // the json file with new info without having to restart the bot
    var gameFile = fs.readFileSync(GetGameFilePath(), 'utf8');
    return JSON.parse(gameFile); 
}

module.exports.ScriptManager = ScriptManager;