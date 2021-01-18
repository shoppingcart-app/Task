const userController = require('../../src/Controllers/userController');
const userModel = require('../../src/Models/userReg');

describe("user controller test cases", () =>{
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
       // jest.spyOn(ProductModel.prototype, 'save').mockImplementation(() => Promise.resolve(productObj));
        const resp = await productController.createProduct(productObj).catch(err => console.log(err));
        console.log(resp);
    })

    it("create product", async ()=> {
        const productObj = {
            title:'iphone',
            price:'234343',
            imageUrl:'sasa',
            description:'smart phone'
        }
        //const Product =new ProductModel(productObj);
        jest.spyOn(ProductModel, 'find').mockImplementation((data, cb) => cb(null,productObj))
       // jest.spyOn(ProductModel.prototype, 'save').mockImplementation(() => Promise.resolve(productObj));
        const resp = await productController.getAllProduct(productObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
    })
})