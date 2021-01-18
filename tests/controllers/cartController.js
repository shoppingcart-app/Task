const cartController = require('../../src/Controllers/cartController');
const cartModel = require('../../src/Models/Cart');
 
describe("cart controller test cases", () =>{
    afterEach(()=>{
        jest.resetAllMocks();
    })
    it("create cart", async ()=> {
        const cartObj = {
            user:"Thejesh",
            items:"5",
        }
        jest.spyOn(cartModel.prototype, 'save').mockImplementation((callback) => callback(null,cartObj))
        const resp = await cartController.createCart(cartObj).catch(err => console.log(err));
        console.log(resp);
    })
    it("get all items", async ()=> {
        const cartObj = {
            user:"Thejesh",
            items:"5",
        }
        jest.spyOn(ProductModel, 'findOneAndUpdate').mockImplementation((data, cb) => cb(null,productObj))
        const resp = await productController.getOneItemAndUpdate(productObj,(err,result)=>{
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
        const resp = await productController.getOneItem(productObj,(err,result)=>{
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
        const resp = await productController.getItemById(productObj,(err,result)=>{
            console.log(result);
        })
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
        const resp = await productController.deleteItem(productObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
    })
})