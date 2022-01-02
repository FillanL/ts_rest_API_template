import { NextFunction, Response, Request } from 'express';

export function refreshToken(req: Request, res: Response, next: NextFunction) {
	// TODO: implement refresh token
	// verify token
	// if valid, return new token
	// else return error
	res.status(200).json({ message: 'resfreshToekn' });
}
export function logout(req: Request, res: Response, next: NextFunction) {
	// TODO: implement logout
	//  clear cookies
	//  expire existing tokens
	res.status(200).json({ message: 'logout' });
}
export function login(req: Request, res: Response, next: NextFunction) {
	//  check if user exist
	//  find user
	//  compare request password with user password
	//  check if password is correct
	//  if correct, create token
	//  if not, return error

	res.status(200).json({ message: 'login' });
}
