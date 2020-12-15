'use strict';

const
	log = require('@trenskow/log');

exports = module.exports = (application) => {
	return (condition, message) => {
		if (!condition) {
			log('error', application, { message });
			process.exit(1);
		}
	};
};
