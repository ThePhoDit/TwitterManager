# Twitter Manager

Publish tweets to your account with a single Discord command.

> This bot was created in 20 minutes just for curiosity. Any improvement is welcomed, so feel free to send a PR.

## Configuration Guide

1. Create a Discord bot from [Discord's Developer Page](https://discord.com/developers/applications) (you might need to verify you account).
2. Create a Twitter app from [Twitter's Developer Page](https://developer.twitter.com/en/apps).
3. Clone the repo.
4. Run `npm i` in your terminal.
5. Run `npm run windows` if you are in windows or `npm run linux` if you are using a unix system. A configuration file will be created.
6. Fill in all the fields from the `config.json` file if the configuration process did not do it properly.
    - **bot_token:** Your Discord Bot Token.
    - **bot_prefix:** The commands' prefix.
    - **bot_owners:** IDs of the users that can use the bot.
    - **twitter_consumer_key:** Key provided by Twitter Developers Page.
    - **twitter_consumer_secret:** Key provided by Twitter Developers Page.
    - **twitter_access_token_key:** Key provided by Twitter Developers Page.
    - **twitter_access_token_secret:** Key provided by Twitter Developers Page.
7. Save changes and run `npm run start` on your terminal.

## Warning

Do not give permissions to users you do not trust to use the bot, as they will be able to tweet into your account.

## License

[MIT](https://choosealicense.com/licenses/mit/)