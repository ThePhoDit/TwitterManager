const accounts = require('../accounts');
const { promisify } = require('util');

/**
 * Get list of Twitter user IDs from the screen name.
 * @param T - Twitter Client.
 * @return {Promise<string[]>}
 */
module.exports = (T) => {
	const getAsync = promisify(T.get.bind(T));
	const userIDs = [];
	return new Promise(async (resolve) => {
		for (const account of Object.keys(accounts)) {
			const user = await getAsync('/users/show', { screen_name: account }).catch(() => false);
			if (!user || user.err || user instanceof Error) continue;
			userIDs.push(user.id_str);
		}
		resolve(userIDs);
	})
}