import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

export function validateUserBody(schema: AnyZodObject) {
	return function (req: Request, res: Response, next: NextFunction) {
		try {
			schema.parse({
				body: req.body,
				query: req.query,
				params: req.params,
				headers: req.headers,
				cookies: req.cookies,
			});
		} catch (error: any) {
			return res.status(400).send(error.message);
		}
		next();
	};
}
