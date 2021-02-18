const app = require("../../app");
const supertest = require("supertest");
const request = supertest(app);

it("add New Book", async (done) => {
    const response = await request.post("/cart/addBook").send({
        book:"qwerty",
        quantity:"3",
        userName:"thejesh",
        totalPrice:"1234"
    });
   
   // expect(response.body.bookName).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });

  it("get cart items", async (done) => {
    const response = await request.get("/cart/getCartItems");
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });

  it("Delete Book", async (done) => {
    const response = await request.post("/cart/deleteBook").send({
        book:"qwerty",
        quantity:"3",
        userName:"thejesh",
        totalPrice:"1234"
    });
   
   // expect(response.body.bookName).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });

  it("decrement", async (done) => {
    const response = await request.post("/cart/dec").send({
        book:"qwerty",
        quantity:"3",
        userName:"thejesh",
        totalPrice:"1234"
    });
   
   // expect(response.body.bookName).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });
  it("increment", async (done) => {
    const response = await request.post("/cart/inc").send({
        book:"qwerty",
        quantity:"3",
        userName:"thejesh",
        totalPrice:"1234"
    });
   
   // expect(response.body.bookName).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });

  
