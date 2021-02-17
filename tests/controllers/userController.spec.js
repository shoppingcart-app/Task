const app = require("../../app");
const supertest = require("supertest");
const request = supertest(app);

it("registration", async (done) => {
    const response = await request.post("/user/reg").send({
        firstName:"Thejesh",
    lastName:"Reddy",
    userName:"thejesh07",
    password:"qwerty",
    phnNo:"996348884",
    address:"Nellore",
    state:"AP",
    city:"Nellore",
    pincode:"524002"
    });
   
    //expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });
  it("Login", async (done) => {
    const response = await request.post("/user/login").send({
        userName:"thejesh07",
        password:"qwerty"
    });
   
    //expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });

  it("get username", async (done) => {
    const response = await request.get("/user/getUser/${name}");
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });
  it("Upadte details", async (done) => {
    const response = await request.post("/user/updateDetails").send({
        firstName:"Thejesh",
    lastName:"Reddy",
    userName:"thejesh07",
    password:"qwerty",
    phnNo:"996348884",
    address:"Nellore",
    state:"AP",
    city:"Nellore",
    pincode:"524002"
    });
   
    //expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(404);
   
    // expect(response.body.message).toBe('Products')
    done();
  });