const accounts = require('../accounts');

/**
 * Get list of Twitter user IDs from the screen name.
 * @param {import('twit')} T - Twitter Client.
 * @return {Promise<string[]>}
 */
module.exports = async (T) => {
	const unfilteredIDs = await Promise.all(Object.keys(accounts).map(async (value) => {
		const user = await T.get('/users/show', { screen_name: value }).catch(() => null);
		if (!user || user.err) void 0;
		return (user.data && user.data.id_str) ? user.data.id_str : undefined;
	}));

	return unfilteredIDs.filter((val) => val);
}