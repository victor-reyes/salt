import assert from 'assert';
import request from 'supertest';
import { app } from './api';

describe('developer API should have endpoints to', () => {
  it('get all developers', done => {
    // arrange

    // act and assert
    request(app)
      .get('/api/developers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        assert.strictEqual(res.body.length, 2);
      })
      .expect(200, done);
  });

  it('get developer 1', done => {
    request(app)
      .get('/api/developers/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        assert.deepStrictEqual(res.body, { id: 1, name: 'Marcus Dev', email: 'marcus@salt.dev' });
      })
      .expect(200, done);
  });

  it('post a developer', done => {
    const [name, email] = ['John', 'john@salt.dev'];
    request(app)
      .post('/api/developers/')
      .set('Accept', 'application/json')
      .send({ name, email })
      .expect('Content-Type', /json/)
      .expect('location', /\/api\/developers\/\d+/)
      .expect(res => {
        assert.strictEqual(res.body.name, name);
        assert.strictEqual(res.body.email, email);
        assert.strictEqual(typeof res.body.id, 'number');
      })
      .expect(201, done);
  });

  it('delete a developer by id', done => {
    request(app).delete('/api/developers/1').set('Accept', 'application/json').expect(204, done);
  });

  it('returns 404 when trying to delete a non-existent developer', done => {
    request(app).delete('/api/developers/4').set('Accept', 'application/json').expect(404, done);
  });

  it('update a developer', done => {
    const name = 'Generic Dev';
    request(app)
      .patch('/api/developers/2')
      .set('Accept', 'application/json')
      .send({ name })
      .expect('location', '/api/developers/2')
      .expect(res => {
        assert.strictEqual(res.body.name, name);
      })
      .expect(200, done);
  });

  it('returns 400 when update request is missing required fields', done => {
    request(app).patch('/api/developers/2').set('Accept', 'application/json').expect(400, done);
  });
  it('returns 404 when trying to delete a non-existent developer', done => {
    request(app).patch('/api/developers/24').set('Accept', 'application/json').send({ name: 'test' }).expect(404, done);
  });
});
