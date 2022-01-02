import dayjs from 'dayjs';
import pino from 'pino';

const logger = pino({
	prettyPrint: true,
	base: {
		pid: false,
	},
	timestamp: () => `, "TIME": ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
});

export default logger;
