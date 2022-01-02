import { server } from './server';
import config from 'config';
import logger from './utils/logger.utils';

const PORT = config.get<number>('port') || process.env.PORT;

export const app = server();

app.listen(PORT, async () => {
	logger.info(
		'Your app is listening on port ' + PORT,
		`http://localhost:${PORT}`
	);
});
