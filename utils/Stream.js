const { MessageEmbed } = require('discord.js');
const accounts = require('../accounts');

/**
 * Create the stream to get events.
 * @param {import('discord.js').Client} client - The Discord Client.
 * @param {import('twit')} T - The Twitter Client.
 * @param {string[]} IDs - Twitter User IDs.
 * @return Void
 */
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
				.setDescription(tweet.extended_tweet ? tweet.extended_tweet.full_text : tweet.text)
				.setTimestamp();
			if (tweet.entities.media) embed.setImage(tweet.entities.media[0].media_url);

			// Get Channel and Send Embed
			for (const channel of accounts[tweet.user.screen_name]) {
				const chn = client.channels.cache.get(channel);
				if (!chn || !['news', 'text'].includes(chn.type)) return;
				chn.send(embed).catch(() => false);
			}
		}
	});

	stream.on('disconnect', (msg) => {
		console.log(`[STREAM] - Disconnect => ${msg}`);
	});
}