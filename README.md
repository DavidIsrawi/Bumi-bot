# Bumi-bot - A Chat bot for Twitch Streams

Using it for my personal Twitch streams, but feel free to grab it for yours

## Start

To host the bot, just run `npm start`

## Structure

The connection and authorization is in `src/app.js`. You'll need to include a file in the root folder called `config.json` that includes the following:

- USERNAME: the bot's name, not really relevant
- OAUTH_TOKEN: To create an auth token, first register the bot [here](https://dev.twitch.tv/) in Console->Applications, then make the GET call in [this doc](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth). Get the list of scopes (permissions) you'd like to include [here](https://dev.twitch.tv/docs/authentication#scopes). Then run the GET call from the browser by just adding it through the URL and grab the new auth token from the response URL also in the URL bar. The video I added in Relevant Sources explains it pretty well.
- MY_CHANNEL: name of channel prefixed with a `#`

Besides that, all scripts are currently in `scripts.js`.

### Smash Arena Script

If you want to use the script, simply add the arena info to arena.json. You can edit this file as the bot is running and will just re-fetch the file every time to read the latest value.

## Relevant Sources

- To write the bot, I mainly followed [this video](https://www.youtube.com/watch?v=7uSjKbAUHXg&ab_channel=TechnoTim) by Techno Tim and then added additional scripts and refactored them all to its own class
- [Twitch docs](https://dev.twitch.tv/docs/)
- [tmi.js](https://github.com/tmijs/tmi.js). JS library for Twitch API
