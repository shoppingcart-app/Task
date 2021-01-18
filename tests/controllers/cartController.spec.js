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
        jest.spyOn(cartModel, 'findOneAndUpdate').mockImplementation((data, cb) => cb(null,cartObj))
        const resp = await cartController.getOneItemAndUpdate(cartObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
    })
 
    it("get one item", async ()=> {
        const cartObj = {
            user:"Thejesh",
            items:"5",
        }
        jest.spyOn(cartModel, 'findById').mockImplementation((data, cb) => cb(cartObj))
        const resp = await cartController.getOneItem(cartObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
    })
 
    it("update item", async ()=> {
        const cartObj = {
            user:"Thejesh",
            items:"5",
        }
        jest.spyOn(cartModel, 'findByIdAndUpdate').mockImplementation((data, cb) => cb(cartObj))
        const resp = await cartController.getItemById(cartObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
    })
 
    it("delete item", async ()=> {
        const cartObj = {
            user:"Thejesh",
            items:"5",
        }
        jest.spyOn(cartModel, 'findByIdAndRemove').mockImplementation((data, cb) => cb(cartObj))
        const resp = await cartController.deleteItem(cartObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
    })
})