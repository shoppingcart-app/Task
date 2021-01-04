const request = require('supertest');
const express = require('express');
 
const app = express();
describe('Post Endpoints', () => {
    it('should create a new post', async () => {
        const res = await request(app)
            .post('/api/products')
            .send({
                userId: 1,
                title: "book",
                price: "500",
                description: "book",
                imageUrl: "qwerty",
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('products');
    });
 
    it('should fetch a single post', async () => {
        const productsId = 1;
        const res = await request(app).get(`/api/products/${productsId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('products');
    });
 
    it('should fetch all posts', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('products');
        expect(res.body.posts).toHaveLength(1);
    });
 
    it('should update a post', async () => {
        const res = await request(app)
            .put('/api/products/1')
            .send({
                userId: 1,
                title: "updated title",
                price: "updated price",
                description: "updated",
                imageUrl: "updated",
            });
 
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('post');
        expect(res.body.post).toHaveProperty('title', 'updated title');
    });
 
    it('should return status code 500 if db constraint is violated', async () => {
        const res = await request(app)
            .post('/api/products')
            .send({
                title: "book",
                price: "500",
                description: "book",
                imageUrl: "qwerty",
            });
        expect(res.statusCode).toEqual(500);
        expect(res.body).toHaveProperty('error');
    });
 
    it('should delete a post', async () => {
        const res = await request(app).delete('/api/products/1');
        expect(res.statusCode).toEqual(204);
    });
 
    it('should respond with status code 404 if resource not found', async () => {
        const productId = 1;
        const res = await request(app).get(`/api/products/${productId}`);
        expect(res.statusCode).toEqual(404);
    });
});