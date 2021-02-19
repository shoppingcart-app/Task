const app = require("../../app");
const supertest = require("supertest");
const request = supertest(app);
const _id = "602d28df0915654fe03b097e";
const _name ="hello";
const _category="EMOTIONAL";
const _author ="thejesh"
it("get all Books", async (done) => {
  const response = await request.get("/book/getBooks");
 
  expect(response.status).toBe(200);
  expect(response.body.message).toBe(true)


  done();
});




it("get Book by name", async (done) => {
  const response = await request.get(`/book/getBook/${_name}`);
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});
it("get Book by id", async (done) => {
  const response = await request.get(`/book/getBookById/${_id}`);
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});


it("get Book by Category ", async (done) => {
  const response = await request.get(`/book/getBookByCategory/${_category}`);
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});

it("get Book by author", async (done) => {
  
  const response = await request.get(`/book/getBookByAuthor/${_author}`);
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});
it("Register New Book", async (done) => {
  const response = await request.post("/book/addBook").send({
    bookName:"thejesh",
    author:"thejesh",
    price:"23456",
    category:"EMOTINOL",
    imageURL:"fhoghrhehmu",
    description:"poiuytrewq",
    publishedDate:"27/7/21"
  });
 
 // expect(response.body.bookName).toBeTruthy();
 
  expect(response.status).toBe(500);
 
  // expect(response.body.message).toBe('Products')
  done();
});

it("Delete book", async (done) => {
  const response = await request.post(`/book/deleteBook/${_id}`).send({
   
  });
 
 // expect(response.body.bookName).toBeTruthy();
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});

it("Add Category", async (done) => {
  const response = await request.post(`/book/addCategory/${_category}`).send({
   name:"mom",
  });
 
 // expect(response.body.name).toBeTruthy();
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});

it("get category", async (done) => {
  const response = await request.get("/book/getCategories");
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});
it("Delete Category", async (done) => {
  const response = await request.post(`/book/deleteCategory/${_id}`).send({
  
  });
 
 // expect(response.body.name).toBeTruthy();
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});
it("Add Author", async (done) => {
  const response = await request.post("/book/addAuthor").send({
    name:"thejesh",
    emailId:"thejesh@gmail.com",
    contactNo:"9963489884",
    address:"Nellore,AP",
  });
 
 // expect(response.body.name).toBeTruthy();
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});
it("get Author", async (done) => {
  const response = await request.get("/book/getAuthors");
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});
it("Delete Author", async (done) => {
  const response = await request.post(`/book/deleteAuthor/${_id}`).send({
    
  });
 
 // expect(response.body.name).toBeTruthy();
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});

