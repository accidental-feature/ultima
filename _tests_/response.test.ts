import request from 'supertest';

const server = 'https://www.ultima.rest/api';

test('Get a random quote', async () => {
	const response = await request(server)
		.get('/quote/random')
		.expect('Content-type', /json/)
		.expect(200);
	expect(response.body).toBeDefined();
	expect(response.body).toHaveProperty('id');
	expect(response.body).toHaveProperty('quote');
	expect(response.body).toHaveProperty('character');
	expect(response.body).toHaveProperty('title');
	expect(response.body).toHaveProperty('esrb');
	expect(response.body).toHaveProperty('release');
});

test('Get random quotes', async () => {
	const response = await request(server)
		.get('/quotes/random')
		.expect('Content-type', /json/)
		.expect(200);
	expect(response.body).toBeDefined();
	expect(Array.isArray(response.body)).toBeTruthy();
	expect(response.body[0]).toHaveProperty('id');
	expect(response.body[0]).toHaveProperty('quote');
	expect(response.body[0]).toHaveProperty('character');
	expect(response.body[0]).toHaveProperty('title');
	expect(response.body[0]).toHaveProperty('esrb');
	expect(response.body[0]).toHaveProperty('release');
});

test('Get a random quote from Sephiroth', async () => {
	const response = await request(server)
		.get('/quote/character?name=Sephiroth')
		.expect('Content-type', /json/)
		.expect(200);
	expect(response.body).toBeDefined();
	expect(response.body).toHaveProperty('id');
	expect(response.body).toHaveProperty('quote');
	expect(response.body).toHaveProperty('character', 'Sephiroth');
	expect(response.body).toHaveProperty('title');
	expect(response.body).toHaveProperty('esrb', 'T');
	expect(response.body).toHaveProperty('release');
});