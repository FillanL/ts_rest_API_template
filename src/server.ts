import express, { Express } from 'express';
import routes from './routes';

export function server(): Express {
	const app = express();
	app.use(express.json());
    app.use("/api/v1/",routes);
	
	return app;
}
