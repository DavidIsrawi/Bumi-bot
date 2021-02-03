var fs = require('fs');

class ScriptManager {
    constructor(client) {
        this.client = client;
    }

    CheckMessageScripts(tags, message, channel) {
        SayHello(this.client, tags, message, channel);
        GetArenaInfo(this.client, message, channel);
    }

    TriggerHostedScript(username, channel) {
        WelcomeHostedCrew(this.client, username, channel);
    }
}

function SayHello(client, tags, message, channel) {
    if (message === '!hello' || message === '!hi') {
		client.say(channel, `@${tags.username}, heya!`);
    }
}

// Smash arena
function GetArenaInfo(client, message, channel) {
    if (message === '!arena') {
        // Reading json every time instead of doing 'require' so I can update
        // the json file with new arena info without having to restart the bot
        var appRoot = process.cwd()
        var arenaFile = fs.readFileSync(appRoot + '/arena.json', 'utf8');
        var arenaInfo = JSON.parse(arenaFile);
        client.say(channel, arenaInfo.arena_info);
    }
}

function WelcomeHostedCrew(client, username, channel) {
    client.say(channel, 'Welcome to ' + username + '`s crew! Thank you for hosting')
}

module.exports.ScriptManager = ScriptManager;