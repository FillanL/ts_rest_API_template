import supertest from 'supertest';
import { server } from '../../server';

const app = server();
describe('session controller', () => {
	describe('refreshToken', () => {
		const url = '/api/v1/session/refreshToken';
		it('should return new refreshToken', async () => {
			const response = await supertest(app).post(url).send({});

			console.log(response);
			expect(response.statusCode).toBe(200);
		});
	});
	describe('login', () => {
		const url = '/api/v1/session/login';
		it('should have access or refreshToken', async () => {
			const response = await supertest(app).post(url).send({}).expect(200);
			// expect(response.status).toBe(200);
		});
	});
	describe('logout', () => {
		const url = '/api/v1/session/logout';
		it('should NOT have access or refreshToken', async () => {
			const response = await supertest(app).post(url).send({});
			expect(response.status).toBe(200);
		});
	});
});
