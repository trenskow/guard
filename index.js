import log from '@trenskow/log';

export default (application) => {
	return (condition, message) => {
		if (!condition) {
			log('error', application, { message });
			process.exit(1);
		}
	};
};
