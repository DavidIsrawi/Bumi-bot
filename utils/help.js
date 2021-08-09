// We are forced to send the commands as an array instead of a string with newlines
// because Twitch does not support new lines
const HELP_COMMANDS = [
'!arena - Arena id and pwd',
'!bracket - Bracket link for current tourney',
'!discord - Link to the Discord',
'!framedata <character> - Link to character\'s frame data',
'!hello - Say hello',
'!latestvideo - Link to latest video',
'!s <user> - Friendly shame to user',
'!so <user> - Shoutout user'
]

module.exports.HELP_COMMANDS = HELP_COMMANDS;