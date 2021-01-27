const productController = require('../../src/Controllers/productController');
const ProductModel = require('../../src/Models/Product');
 
describe("product controller test cases", () =>{
    afterEach(()=>{
        jest.resetAllMocks();
    })
    it("create product", async ()=> {
        const productObj = {
            title:'iphone',
            price:'234343',
            imageUrl:'sasa',
            description:'smart phone'
        }
        jest.spyOn(ProductModel.prototype, 'save').mockImplementation((callback) => callback(null,productObj))
        const resp = await productController.createProduct(productObj).catch(err => console.log(err));
        console.log(resp);
        expect(productObj.price).toBe(resp.price);
    })
 
    
 
    it("get all product", async ()=> {
        const productObj = {
            title:'iphone',
            price:'234343',
            description:'smart phone',
            imageUrl:'sasa'
        }
        jest.spyOn(ProductModel, 'find').mockImplementation((data, cb) => cb(null,productObj))
        const resp = await productController.getAllProduct(productObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
        expect(productObj.result).toBe(resp);
    })
 
    it("get one product", async ()=> {
        const productObj = {
            title:'iphone',
            price:'234343',
            description:'smart phone',
            imageUrl:'sasa'
        }
        jest.spyOn(ProductModel, 'findById').mockImplementation((data, cb) => cb(productObj))
        const resp = await productController.getOneProduct(productObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
        expect(productObj.result).toBe(resp);
    })
 
    it("update product", async ()=> {
        const productObj = {
            title:'iphone',
            price:'234343',
            description:'smart phone',
            imageUrl:'sasa'
        }
        jest.spyOn(ProductModel, 'findByIdAndUpdate').mockImplementation((data, cb) => cb(productObj))
        const resp = await productController.updateProduct(productObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
        expect(productObj.result).toBe(resp);
    })
 
    it("delete product", async ()=> {
        const productObj = {
            title:'iphone',
            price:'234343',
            description:'smart phone',
            imageUrl:'sasa'
        }
        
        jest.spyOn(ProductModel, 'findByIdAndRemove').mockImplementation((data, cb) => cb(productObj))
        const resp = await productController.deleteProduct(productObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
        expect(productObj.result).toBe(resp);
    })
})