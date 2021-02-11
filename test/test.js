const assert = require('assert');
const request = require('supertest');
const app = require('../index');

describe('profiles', () => {
  it('creates a profile', async () => {
    await request(app)
      .post('/profile/ada')
      .set('Cookie', ['user=ada'])
      .expect(201)
      .send({ firstName: 'ada' });
  });
  it('only creates a profile if you are logged in', async () => {
    await request(app)
      .post('/profile/ada')
      .expect(401)
      .send({ firstName: 'ada' });
  });
  it('does not create an invalid profile', async () => {
    await request(app)
      .post('/profile/ada')
      .set('Cookie', ['user=ada'])
      .expect(400)
      .send({ lastName: 'where is my first name?' });
  });
  it('gets a profile', async () => {
    const { body } = await request(app)
      .get('/profile/ada')
      .set('Cookie', ['user=ada'])
      .expect(200);
    assert.strictEqual(body.firstName, 'Ada');
  });
  it('only lets you get a profile if you are logged in', async () => {
    const { body } = await request(app)
      .get('/profile/ada')
      .set('Cookie', ['user=anyone'])
      .expect(200);
    assert.strictEqual(body.firstName, 'Ada');
  });
});
