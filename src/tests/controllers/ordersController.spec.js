const app = require("../../app");
const supertest = require("supertest");
const request = supertest(app);

it("get all ordered items", async (done) => {
  const response = await request.get("/order/orderedItems");
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});
it("place order", async (done) => {
    const response = await request.post("/order/placeOrder").send({
        orderedItems:"2",
        userName:"thejesh",
        date:"17-2-2021"
    });
   
    //expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });