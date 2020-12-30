import productController from '../Controllers/productController';


const mockProductSchema = jest.fn();

jest.mock('../Controllers/productController', () =>{
return jest.fn().mockImplementation(() =>{


return {productSchema : mockProductSchema };

});
});