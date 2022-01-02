import supertest from 'supertest';
import { server } from '../server';
import { app } from '../app';

const serverApp = server();

beforeEach(() => {});
afterEach(async () => {});
describe('api', () => {
	describe('app', () => {
		describe('coverage - should excute app', () => {
			it('should return 200', async () => {
				const response = await supertest(app).get('/api/v1/healthCheck');
				expect(response.status).toBe(200);
			});
		});
	});
	describe('get route', () => {
		describe('given the basic url', () => {
			it('should return a 200 status code', async () => {
				await supertest(serverApp).get('/api/v1/healthCheck').expect(200);
			});
			it('it should return 404', async () => {
				const { statusCode } = await supertest(serverApp).get('/api/v1/');
				expect(statusCode).toBe(404);
			});
		});
	});
});
