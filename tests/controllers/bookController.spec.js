const app = require("../../app");
const supertest = require("supertest");
const request = supertest(app);

it("get all Books", async (done) => {
  const response = await request.get("/book/getBooks");
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});
it("get Book by name", async (done) => {
  const response = await request.get("/book/getBook/${name}");
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});
it("get Book by id", async (done) => {
  const response = await request.get("/book/getBookById/${id}");
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});
it("get Book by Category ", async (done) => {
  const response = await request.get("/book/getBookByCategory/${category}");
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});

it("get Book by author", async (done) => {
  const response = await request.get("/book/getBookByAuthor/${author}");
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});
it("Register New Book", async (done) => {
  const response = await request.post("/book/addBook").send({
    bookName:"qwerty",
    author:"trewq",
    price:"23456",
    category:"book",
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
  const response = await request.post("/book/deleteBook/${id}").send({
    bookName:"qwerty",
    author:"trewq",
    price:"23456",
    category:"book",
    imageURL:"fhoghrhehmu",
    description:"poiuytrewq",
    publishedDate:"27/7/21"
  });
 
 // expect(response.body.bookName).toBeTruthy();
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});

it("Add Category", async (done) => {
  const response = await request.post("/book/addCategory/${category}").send({
   name:"qwerty",
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
  const response = await request.post("/book/deleteCategory/${id}").send({
   name:"qwerty",
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
  const response = await request.post("/book/deleteAuthor/${id}").send({
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