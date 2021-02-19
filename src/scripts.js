var fs = require('fs');
const { GenerateFrameDataLinkFromMessage } = require('./frameDataLinksHandler.js');

class ScriptManager {
    constructor(client) {
        this.client = client;
    }

    CheckMessageScripts(tags, message, channel) {
        var hasAdminRights = IsUserStreamerOrMod(tags);

        UpdateArenaCode(this.client, message, channel, hasAdminRights);
        SayHello(this.client, tags.username, message, channel);
        SayArenaInfo(this.client, message, channel);
        SayDoubleCaret(this.client, message, channel);
        SayNotLikeThis(this.client, message, channel);
        SayCharacterFrameData(this.client, message, channel);
    }

    TriggerHostedScript(username, channel) {
        ThankHosting(this.client, username, channel);
    }

    TriggerRaidedScript(username, channel) {
        WelcomeRaid(this.client, username, channel);
    }
}

function UpdateArenaCode(client, message, channel, hasAdminRights) {
    const parsedMessage = message.split(' ');
    if (parsedMessage[0] === '!updatearena') {
        if (parsedMessage.length === 3 && hasAdminRights) {
            var arenaJson = {
                "arena_info": parsedMessage[1].toUpperCase().concat(' ', parsedMessage[2].toUpperCase())
            }
            
            fs.writeFileSync(GetArenaFilePath(), JSON.stringify(arenaJson));
            client.say(channel, 'Arena updated');
        }
        else {
            client.say(channel, 'Arena Update: incorrect parameters or not a mod');
        }
    }
}

function SayHello(client, username, message, channel) {
    if (message === '!hello' || message === '!hi') {
		client.say(channel, `@${username}, heya!`);
    }
}

function SayArenaInfo(client, message, channel) {
    if (message === '!arena') {
        // Reading json every time instead of doing 'require' so I can update
        // the json file with new arena info without having to restart the bot
        var arenaFile = fs.readFileSync(GetArenaFilePath(), 'utf8');
        var arenaInfo = JSON.parse(arenaFile);
        client.say(channel, arenaInfo.arena_info);
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

function GetArenaFilePath() {
    var appRoot = process.cwd();
    return appRoot + '/utils/arena.json';
}

module.exports.ScriptManager = ScriptManager;