import cartController from '../Controllers/cartController';


const mockCartSchema = jest.fn();

jest.mock('../Controllers/cartController', () =>{
return jest.fn().mockImplementation(() =>{


return {cartSchema : mockCartSchema };

});
});