# Twitter Manager

Publish tweets to your account with a single Discord command.

> This bot was created under 20 minutes just for curiosity. Any improvements are welcomed, so feel free to send a PR.

## Configuration Guide

1. Create a Discord bot from [Discord's Developer Page](https://discord.com/developers/applications) (you might need to verify you account).
2. Create a Twitter app from [Twitter's Developer Page](https://developer.twitter.com/en/apps).
3. Clone the repo.
4. Run `npm i` in your terminal.
5. Fill in all the fields from the `config.json` file.
    - **bot_token:** Your Discord Bot Token.
    - **bot_prefix:** The commands' prefix.
    - **bot_owners:** IDs of the users that can use the bot.
    - **twitter_consumer_key:** Key provided by Twitter Developers Page.
    - **twitter_consumer_secret:** Key provided by Twitter Developers Page.
    - **twitter_access_token_key:** Key provided by Twitter Developers Page.
    - **twitter_access_token_secret:** Key provided by Twitter Developers Page.
6. Save changes and run `npm run start` on your terminal.

## Warning

Do not give permissions to users you do not trust to use the bot, as they will be able to tweet into your account.

## License

[MIT](https://choosealicense.com/licenses/mit/)
