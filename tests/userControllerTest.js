const request = require('supertest');
const app = require('../src/Models/userReg.js');

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/reg')
      .send({
        userId: 1,
    firstName:"Thejesh",
    lastName:"Reddy",
    userName:"thejesh98",
    password:"thejesh98",
    phnNo:"9963489884",
    address:"qwerty",
    state:"AP",
    city:"NLR",
    pincode:"524002",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('post');
  });

  it('should fetch a single post', async () => {
    const regId = 1;
    const res = await request(app).get(`/api/reg/${regId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('post');
  });

  it('should fetch all posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('posts');
    expect(res.body.posts).toHaveLength(1);
  });

  it('should update a post', async () => {
    const res = await request(app)
      .put('/api/reg/1')
      .send({
        userId: 1,
        firstName:"updated",
        lastName:"updated",
        userName:"updated",
        password:"updated",
        phnNo:"updated",
        address:"updated",
        state:"updated",
        city:"updated",
        pincode:"updated",
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('post');
    expect(res.body.post).toHaveProperty('title', 'updated title');
  });

  it('should return status code 500 if db constraint is violated', async () => {
    const res = await request(app)
      .post('/api/reg')
      .send({
        firstName:"Thejesh",
        lastName:"Reddy",
        userName:"thejesh98",
        password:"thejesh98",
        phnNo:"9963489884",
        address:"qwerty",
        state:"AP",
        city:"NLR",
        pincode:"524002",
      });
    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('error');
  });

  it('should delete a post', async () => {
    const res = await request(app).delete('/api/reg/1');
    expect(res.statusCode).toEqual(204);
  });

  it('should respond with status code 404 if resource is not found', async () => {
    const regId = 1;
    const res = await request(app).get(`/api/posts/${regId}`);
    expect(res.statusCode).toEqual(404);
  });
});