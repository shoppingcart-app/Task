const { JsonWebTokenError } = require('jsonwebtoken');
const productController = require('../../src/controllers/productController');
const productSchema = require('../../src/models/Product');
describe('product controller tests', ()=>{
    test('create product test case ', async()=>{
        
        const createProductData = {
    
            "title" : "realme 15 pro",
            "price":"1400",
            "description":"sjdhik",
            "imageUrl":"dgkshdl"
        }
        const Product = new productSchema(createProductData);
        jest.spyOn(Product,'save').mockImplementation(() => Promise.resolve(createProductData))
        const createProductResponse = await productController.createProduct(createProductData);
        expect(createProductResponse.price).toBe("14000");
    })
})
