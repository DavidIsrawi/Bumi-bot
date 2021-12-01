# How to Update the Auth Token

This token is needed in order for the application to connect to your Twitch account, the issue is that it expires after 60 days of requesting it. In order to get a new token, you have to send the following GET request (put it on your browser's URL bar):

```
https://id.twitch.tv/oauth2/authorize
    ?client_id=<copy from Twitch API site>
    &redirect_uri=<also from Twitch API site>
    &response_type=token
    &scope=channel:moderate+chat:edit+chat:read
```

## The right way of doing it - Refresh Token

I currently don't follow this approach, but it is a way to avoid having to manually update the token every 60 days.

[Follow the documentation here in order to implemnent it](https://dev.twitch.tv/docs/authentication#refreshing-access-tokens)
