const config = require('./config.json');
const { Client, MessageEmbed } = require('discord.js');
const bot = new Client();
const Twitter = require('twitter');
const twitter = new Twitter({
  consumer_key: config.twitter_consumer_key,
  consumer_secret: config.twitter_consumer_secret,
  access_token_key: config.twitter_access_token_key,
  access_token_secret: config.twitter_access_token_secret
});
const params = { screen_name: 'nodejs' };

bot.on('ready', () => {
  console.log(`Coded by ThePhoDit.\n${bot.user.tag} is online.`);
});

bot.on('message', async msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.bot_prefix)) return;
  if (!config.bot_owners.includes(msg.author.id)) return;

  const args = msg.content.slice(config.bot_prefix.length).trim().split(/ +/g),
    command = args.shift();

  if (command === 'tweet') {
    if (!args[0]) return msg.channel.send('You must introduce the tweet content.');
    const tweet = twitter.post('statuses/update', { status: args.join(' ') }).then(() => true).catch(() => false);

    const embed = new MessageEmbed()
      .setTitle(tweet ? 'Tweet Sent' : 'Error Tweeting')
      .setColor(tweet ? 3211008 : 16711680)
      .setDescription(tweet ? `\`${args.join(' ')}\` has been tweeted.`: 'There has been an error sending the tweet.');

    msg.channel.send(embed);
  }
})


bot.login(config.bot_token);
