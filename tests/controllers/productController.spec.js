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
        //const Product =new ProductModel(productObj);
        jest.spyOn(ProductModel.prototype, 'save').mockImplementation((callback) => callback(null,productObj))
       // jest.spyOn(ProductModel.prototype, 'save').mockImplementation(() => Promise.resolve(productObj));
        const resp = await productController.createProduct(productObj).catch(err => console.log(err));
        console.log(resp);
    })
    it("get all product", async ()=> {
        const productObj = {
            title:'iphone',
            price:'234343',
            description:'smart phone',
            imageUrl:'sasa'
        }
        //const Product =new ProductModel(productObj);
        jest.spyOn(ProductModel, 'find').mockImplementation((data, cb) => cb(null,productObj))
        const resp = await productController.getAllProduct(productObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
    })
 
    it("get one product", async ()=> {
        const productObj = {
            title:'iphone',
            price:'234343',                                                                                                                                                    
            description:'smart phone',
            imageUrl:'sasa'
        }
        //const Product =new ProductModel(productObj);
        jest.spyOn(ProductModel, 'findById').mockImplementation((data, cb) => cb(productObj))
       // jest.spyOn(ProductModel.prototype, 'save').mockImplementation(() => Promise.resolve(productObj));
        const resp = await productController.getOneProduct(productObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
    })
 
    it("update product", async ()=> {
        const productObj = {
            title:'iphone',
            price:'234343',
            description:'smart phone',
            imageUrl:'sasa'
        }
        //const Product =new ProductModel(productObj);
        jest.spyOn(ProductModel, 'findByIdAndUpdate').mockImplementation((data, cb) => cb(productObj))
       // jest.spyOn(ProductModel.prototype, 'save').mockImplementation(() => Promise.resolve(productObj));
        const resp = await productController.updateProduct(productObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
    })
    it("error tests", async ()=> {
        const productObj = {
            title:'iphone',
            price:'234343',
            imageUrl:'sasa',
            description:''
        }
        jest.spyOn(ProductModel.prototype, 'save').mockImplementation((error) =>  cb(error))
        const resp = await productController.createProduct(productObj).catch(error => console.log(error)).expect(error).toThrow('Error: not created');
        console.log(resp);
    })
 
    it("delete product", async ()=> {
        const productObj = {
            title:'iphone',
            price:'234343',
            description:'smart phone',
            imageUrl:'sasa'
        }
        //const Product =new ProductModel(productObj);
        jest.spyOn(ProductModel, 'findByIdAndRemove').mockImplementation((data, cb) => cb(productObj))
       // jest.spyOn(ProductModel.prototype, 'save').mockImplementation(() => Promise.resolve(productObj));
        const resp = await productController.deleteProduct(productObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
    })
})