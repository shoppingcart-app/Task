const request = require('supertest');
const express = require('express');
 
const app = express();
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/userReg')
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
    expect(res.body).toHaveProperty('userReg');
  });
 
  it('should fetch a single post', async () => {
    const regId = 1;
    const res = await request(app).get(`/api/userReg/${regId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('userReg');
  });
 
  it('should fetch all posts', async () => {
    const res = await request(app).get('/api/userReg');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('userReg');
    expect(res.body.posts).toHaveLength(1);
  });
 
  it('should update a post', async () => {
    const res = await request(app)
      .put('/api/userReg/1')
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
    expect(res.body).toHaveProperty('userReg');
    expect(res.body.post).toHaveProperty('title', 'updated title');
  });
 
  it('should return status code 500 if db constraint is violated', async () => {
    const res = await request(app)
      .post('/api/userReg')
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
 
 
 
  it('should respond with status code 404 if resource not found', async () => {
    const regId = 1;
    const res = await request(app).get(`/api/userReg/${regId}`);
    expect(res.statusCode).toEqual(404);
  });
});