module.exports = {
    CheckScripts: function (client, tags, message, channel) {
        _SayHello(client, tags, message, channel);
    }
}

function _SayHello(client, tags, message, channel) {
    if (message === '!hello') {
		client.say(channel, `@${tags.username}, heya!`);
    }
}