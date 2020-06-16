const accounts = require('../accounts');

module.exports = (T) => {
	const userIDs = [];
	return new Promise((resolve, reject) => {
		for (const account of accounts) {
			T.get('/users/show', { screen_name: account }, (err, data) => {
				if (err) {
					reject(err);
					return console.log(`[ERROR] ${err}`);
				}

				userIDs.push(data.id_str);
				if (userIDs.length === accounts.length) resolve(userIDs);
			})
		}
	})
}