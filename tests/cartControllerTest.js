const request = require('supertest');
const express = require('express');
 
const app = express();
 
describe('Post Endpoints', () => {
    it('should create a new post', async () => {
        const res = await request(app)
            .post('/api/cart')
            .send({
                userId: 1,
               user:"Thejesh",
               items:"5",
 
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('cart');
    });
 
    it('should fetch a single post', async () => {
        const cartId = 1;
        const res = await request(app).get(`/api/cart/${cartId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('cart');
    });
 
    it('should fetch all posts', async () => {
        const res = await request(app).get('/api/cart');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('cart');
        expect(res.body.posts).toHaveLength(1);
    });
 
    it('should update a post', async () => {
        const res = await request(app)
            .put('/api/cart/1')
            .send({
                userId: 1,
                user:"Thejesh",
               items:"6",
               
            });
 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('post');
        expect(res.body.post).toHaveProperty('title', 'updated title');
    });
 
    it('should return status code 500 if db constraint is violated', async () => {
        const res = await request(app)
            .post('/api/cart')
            .send({
                user:"Thejesh",
               items:"5",
               
            });
        expect(res.statusCode).toEqual(500);
        expect(res.body).toHaveProperty('error');
    });
 
    it('should delete a post', async () => {
        const res = await request(app).delete('/api/cart/1');
        expect(res.statusCode).toEqual(204);
    });
 
    it('should respond with status code 404 if resource is not found', async () => {
        const cartId = 1;
        const res = await request(app).get(`/api/cart/${cartId}`);
        expect(res.statusCode).toEqual(404);
    });
});
