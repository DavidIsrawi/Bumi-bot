const tmi = require('tmi.js');
const { ScriptManager } = require('./scripts');

// for local dev, uncomment the following require and change all environment variables
// to come from env instead of process.env
// const env = require('../config.json');
const options = {
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: process.env.USERNAME,
		password: process.env.OAUTH_TOKEN
	},
	channels: [ process.env.MY_CHANNEL ]
}
const client = new tmi.Client(options);
client.connect().catch(console.error);

const scriptManager = new ScriptManager(client);

client.on('message', (channel, tags, message, self) => {
	if (self) return;
    scriptManager.CheckMessageScripts(tags, message.toLowerCase(), channel);
});

client.on("hosted", (channel, username, viewers, autohost) => {
	scriptManager.TriggerHostedScript(username, channel);
});

client.on("raided", (channel, username, viewers) => {
    scriptManager.TriggerRaidedScript(username, channel);
});