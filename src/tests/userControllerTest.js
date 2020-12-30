import userController from '../Controllers/userController';


const mockUserSchema = jest.fn();

jest.mock('../Controllers/userController', () =>{
return jest.fn().mockImplementation(() =>{


return {userSchema : mockSchema };

});
});