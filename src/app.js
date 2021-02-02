const tmi = require('tmi.js');
const env = require('../config.json');
const { ScriptManager } = require('./scripts');

const options = {
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: env.USERNAME,
		password: env.OAUTH_TOKEN
	},
	channels: [ env.MY_CHANNEL ]
}
const client = new tmi.Client(options);
client.connect().catch(console.error);

const scriptManager = new ScriptManager(client);
client.on('message', (channel, tags, message, self) => {
	if(self) return;
    scriptManager.CheckScripts(tags, message.toLowerCase(), channel);
});