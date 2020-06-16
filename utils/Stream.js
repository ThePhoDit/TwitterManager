const { MessageEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = (client, T, IDs) => {
	const stream = T.stream('statuses/filter', { follow: IDs });

	stream.on('connect', () => {
		console.log('[STREAM] Connecting to Twitter API.');
	});

	stream.on('connected', () => {
		console.log('[STREAM] Connected to Twitter API.');
	});

	stream.on('tweet', (tweet) => {
		if (IDs.includes(tweet.user.id_str)) {
			const embed = new MessageEmbed()
				.setTitle(`New Tweet from ${tweet.user.name}`)
				.setColor(32511)
				.setThumbnail(tweet.user.profile_image_url_https)
				.setDescription(tweet.text)
				.setTimestamp();
			if (tweet.entities.media) embed.setImage(tweet.entities.media[0].media_url);

			// Get Channel and Send Embed
			const channel = client.channels.cache.get(config.channel_id);
			if (channel) {
				channel.send(embed).catch(() => false);
			}
		}
	});

	stream.on('disconnect', (msg) => {
		console.log(`[STREAM] - Disconnect => ${msg}`);
	});
}