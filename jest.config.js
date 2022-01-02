/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
	testMatch: ['**/__tests__/**/*.test.ts'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts'],
	forceExit: true,
};
