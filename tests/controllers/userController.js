const userController = require('../../src/Controllers/userController');
const userModel = require('../../src/Models/userReg');

describe("user controller test cases", () =>{
    afterEach(()=>{
        jest.resetAllMocks();
    })
    it("create user", async ()=> {
        const userObj = {
            firstName:"Thejesh",
            lastName:"Reddy",
            userName:"thejesh98",
            password:"thejesh98",
            phnNo:"9963489884",
            address:"qwerty",
            state:"AP",
            city:"NLR",
            pincode:"524002",
        }
        jest.spyOn(userModel.prototype, 'save').mockImplementation((callback) => callback(null,userObj))
        const resp = await userController.createUser(userObj).catch(err => console.log(err));
        console.log(resp);
    })

    it("get user", async ()=> {
        const userObj = {
            firstName:"Thejesh",
            lastName:"Reddy",
            userName:"thejesh98",
            password:"thejesh98",
            phnNo:"9963489884",
            address:"qwerty",
            state:"AP",
            city:"NLR",
            pincode:"524002",
        }
        jest.spyOn(userModel, 'find').mockImplementation((data, cb) => cb(null,userObj))
        const resp = await userController.getAllUser(userObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
    })
    it("update user", async ()=> {
        const userObj = {
            firstName:"Thejesh",
            lastName:"Reddy",
            userName:"thejesh98",
            password:"thejesh98",
            phnNo:"9963489884",
            address:"qwerty",
            state:"AP",
            city:"NLR",
            pincode:"524002",
        }
        jest.spyOn(userModel, 'findOne').mockImplementation((data, cb) => cb(userObj))
        const resp = await userController.updateUser(userObj,(err,result)=>{
            console.log(result);
        })
        console.log(resp);
    })
})