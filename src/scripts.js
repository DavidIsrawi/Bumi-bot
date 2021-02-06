var fs = require('fs');

class ScriptManager {
    constructor(client) {
        this.client = client;
    }

    CheckMessageScripts(tags, message, channel) {
        SayHello(this.client, tags, message, channel);
        SayArenaInfo(this.client, message, channel);
        SayDoubleCaret(this.client, message, channel);
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

// Smash arena
function SayArenaInfo(client, message, channel) {
    if (message === '!arena') {
        // Reading json every time instead of doing 'require' so I can update
        // the json file with new arena info without having to restart the bot
        var appRoot = process.cwd()
        var arenaFile = fs.readFileSync(appRoot + '/arena.json', 'utf8');
        var arenaInfo = JSON.parse(arenaFile);
        client.say(channel, arenaInfo.arena_info);
    }
}

function SayDoubleCaret(client, message, channel) {
    if (message === '^') {
        client.say(channel, '^^');
    }
}

function ThankHosting(client, username, channel) {
    client.say(channel, 'Woot! Thank you to ' + username + ' for hosting!')
}

function WelcomeRaid(client, username, channel) {
    client.say(channel, 'Noice! Welcome to ' + username + '`s crew! Thank you for raiding')
}

module.exports.ScriptManager = ScriptManager;