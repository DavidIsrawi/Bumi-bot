var fs = require('fs');
const { GenerateFrameDataLinkFromMessage } = require('./frameDataLinksHandler.js');

class ScriptManager {
    constructor(client) {
        this.client = client;
    }

    CheckMessageScripts(tags, message, channel) {
        SayHello(this.client, tags, message, channel);
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

function SayHello(client, tags, message, channel) {
    if (message === '!hello' || message === '!hi') {
		client.say(channel, `@${tags.username}, heya!`);
    }
}

function SayArenaInfo(client, message, channel) {
    if (message === '!arena') {
        // Reading json every time instead of doing 'require' so I can update
        // the json file with new arena info without having to restart the bot
        var appRoot = process.cwd()
        var arenaFile = fs.readFileSync(appRoot + '/utils/arena.json', 'utf8');
        var arenaInfo = JSON.parse(arenaFile);
        client.say(channel, arenaInfo.arena_info);
    }
}

function SayNotLikeThis(client, message, channel) {
    console.log(message);
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
    if (message.substring(0,10) == '!framedata') {
        const messageArray = message.split(' ');
        const IsValidArenaCommand = messageArray !== null && messageArray.length > 1;
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

module.exports.ScriptManager = ScriptManager;