const tmi = require('tmi.js');
const env = require('../config.json');
const scriptManager = require('./scripts');

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

client.on('message', (channel, tags, message, self) => {
	if(self) return;
    scriptManager.CheckScripts(client, tags, message.toLowerCase(), channel);
});