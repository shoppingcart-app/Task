const app = require("../../app");
const supertest = require("supertest");
const request = supertest(app);

it("registration", async (done) => {
    const response = await request.post("/user/reg").send({
        firstName:"Thejesh",
    lastName:"Reddy",
    userName:"thejesh0000@gmail.com",
    password:"qwerty1234~",
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
    const _name ="thejesh07" ;
    const response = await request.get(`/user/getUser/${_name}`);
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });
  it("Update details", async (done) => {
    const response = await request.post("/user/updateDetails").send({
        firstName:"Thejesh",
    lastName:"Reddy",
    userName:"thejesh07",
    password:"qwerty",
    phnNo:"8919656609",
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
  
 