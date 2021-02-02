class ScriptManager {
    constructor(client) {
        this.client = client;
    }

    CheckScripts(tags, message, channel) {
        SayHello(this.client, tags, message, channel);
        GetArenaInfo(this.client, message, channel);
    }
}

function SayHello(client, tags, message, channel) {
    if (message === '!hello' || message === '!hi') {
		client.say(channel, `@${tags.username}, heya!`);
    }
}

// Smash arena
// TODO: Script to change arena ID
function GetArenaInfo(client, message, channel) {
    if (message === '!arena') {
        client.say(channel, `XXXXX XXX`)
    }
}

module.exports.ScriptManager = ScriptManager;