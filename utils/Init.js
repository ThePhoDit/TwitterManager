const accounts = require('../accounts');
const { promisify } = require('util');

/**
 * Get list of Twitter user IDs from the screen name.
 * @param T - Twitter Client.
 * @return {Promise<string[]>}
 */
module.exports = (T) => {
	const userIDs = [];
	return new Promise(async (resolve) => {
		for (const account of Object.keys(accounts)) {
			const user = await T.get('/users/show', { screen_name: account }).catch(() => false);
			if (!user || user.err || user instanceof Error) continue;
			userIDs.push(user.data.id_str);
		}
		resolve(userIDs);
	})
}