const app = require("../../app");
const supertest = require("supertest");
const request = supertest(app);

it("get all Books", async (done) => {
    const response = await request.get("/book/getBooks");
   
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(true)
  
  
    done();
  });
 

  it("Add Author", async (done) => {
    const response = await request.post("/book/addAuthor").send({
      name:"vinujiiw",
      emailId:"thejesh@gmail.com",
      contactNo:"9963489884",
      address:"Nellore,AP",
    });
   
   // expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(true)



   
    // expect(response.body.message).toBe('Products')
    done();
  });

  it("Add Author error", async (done) => {
    const response = await request.post("/book/addAuthor").send({
      emailId:"thejesh@gmail.com",
      contactNo:"9963489884",
      address:"Nellore,AP",
    });
   
   // expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);

    


   
    // expect(response.body.message).toBe('Products')
    done();
  });

  it("author exits", async (done) => {
    const response = await request.post("/book/addAuthor").send({
      name:"vinusha",
      emailId:"thejesh@gmail.com",
      contactNo:"9963489884",
      address:"Nellore,AP",
    });
   
   // expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Author already exists")

   
    // expect(response.body.message).toBe('Products')
    done();
  });
  it("get Author", async (done) => {
    const response = await request.get("/book/getAuthors");
   
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(true)

   
    // expect(response.body.message).toBe('Products')
    done();
  });
  it("Delete Author", async (done) => {
      const _id = "602d318cd7d4354c902286f0";
    const response = await request.post(`/book/deleteAuthor/${_id}`).send({
      
    });
   
   // expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });
  it("Delete Author error", async (done) => {
    const _id = "6";
  const response = await request.post(`/book/deleteAuthor/${_id}`).send({
    
  });
 
 // expect(response.body.name).toBeTruthy();
 
  expect(response.status).toBe(200);
 
  // expect(response.body.message).toBe('Products')
  done();
});

  it("Add Category", async (done) => {
    const response = await request.post("/book/addCategory/fuun").send({
    });
   
   // expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });

  it("Add Category error", async (done) => {
    const response = await request.post("/book/addCategory/").send({
    });
   
   // expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });
  it("Add Category", async (done) => {
    const response = await request.post("/book/addCategory/fupoon").send({
    });
   
   // expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });
  it(" Category exists", async (done) => {
    const response = await request.post("/book/addCategory/MOBILES").send({
    });
   
   // expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Category already exists")


   
    // expect(response.body.message).toBe('Products')
    done();
  });
  it("get category", async (done) => {
    const response = await request.get("/book/getCategories");
   
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(true)

    // expect(response.body.message).toBe('Products')
    done();
  });
  it("Delete Category", async (done) => {
    const response = await request.post("/book/deleteCategory/602d37a3412ff4066833d356").send({
    
    });
   
   // expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);

   
    // expect(response.body.message).toBe('Products')
    done();
  });

  it("Delete Category error", async (done) => {
    const response = await request.post("/book/deleteCategory/602d37356").send({
    
    });
   
   // expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);

   
    // expect(response.body.message).toBe('Products')
    done();
  });

  it("get Book by name", async (done) => {
    const response = await request.get("/book/getBook/qwerty");
   
    expect(response.status).toBe(200);

   
    // expect(response.body.message).toBe('Products')
    done();
  });

  

  

  it("get Book by id 404", async (done) => {
      const _id ="6"
    const response = await request.get(`/book/getBookById/${_id}`);
   
    expect(response.status).toBe(200);
   
    expect(response.body.message).toBe("404 error")
    done();
  });
  it("get Book by id", async (done) => {
    const _id ="602d42433f79872cb880db66"
  const response = await request.get(`/book/getBookById/${_id}`);
 
  expect(response.status).toBe(200);
 
  expect(response.body.message).toBe(true)
  done();
});

it("get Book by Category ", async (done) => {
   const _category="fun";
    const response = await request.get(`/book/getBookByCategory/${_category}`);
   
    expect(response.status).toBe(200);

    // expect(response.body.message).toBe('Products')
    done();
  });

  it("error Book by Category ", async (done) => {
    const _category="1";
     const response = await request.get(`/book/getBookByCategory/${_category}`);
    
   // expect(response.status).toBe(404);
 
     expect(response.body.message).toBe("No books found with that Category")
     done();
   });
  
  it("get Book by author", async (done) => {
    const _author="vinusha"
    const response = await request.get(`/book/getBookByAuthor/${_author}`);
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });

  it("Register New Book", async (done) => {
    const response = await request.post("/book/addBook").send({
        bookName
        :
        "qwerty",
        author
        :
        "QWERTY",
        price
        :
        1234,
        category
        :
        "EMOTIONAL",
        imageURL
        :
        "uploads2021-02-12T10-37-56.930Z_book1111.jpg",
        description
        :
        "sdsfrz",
        publishedDate
        :
        19700115
    });
   
   // expect(response.body.bookName).toBeTruthy();
   
    expect(response.status).toBe(500);
   
    // expect(response.body.message).toBe('Products')
    done();
  });

  it("Delete book", async (done) => {
      const _id ="6012487b4e6412503889e030";
    const response = await request.post(`/book/deleteBook/${_id}`).send({
     
    });
   
   // expect(response.body.bookName).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });



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

  it("registration user exists", async (done) => {
    const response = await request.post("/user/reg").send({
        firstName:"qwerty",
    lastName:"Reddy",
    userName:"thejesh00kkjkl9ii152@gmail.com",
    password:"qwerty1234~",
    phnNo:"996348884",
    address:"Nellore",
    state:"AP",
    city:"Nellore",
    pincode:"524002"
    });
   
    //expect(response.body.name).toBeTruthy();
   
    //expect(response.status).toBe(200);
   
    expect(response.body.message).toBe(true)
    done();
  });


  it("Login", async (done) => {
    const response = await request.post("/user/login").send({
        userName:"thejesh000099991@gmail.com",
        password:"qwerty1234~"
    });
   
    //expect(response.body.name).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });

  it("Login fail", async (done) => {
    const response = await request.post("/user/login").send({
        userName:"thejesh000099991@gmail.com",
        password:"qwer"
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
  
   it("place order", async (done) => {
      const response = await request.post("/order/placeOrder").send({
        orderedItems : ["3"],
        userName:"thejesh07",
          date:"17-2-2021"
      });
     
      //expect(response.body.name).toBeTruthy();
     
      expect(response.status).toBe(200);
      expect(response.body.message).toBe(true)
  
      // expect(response.body.message).toBe('Products')
      done();
    });

    it("get all ordered items", async (done) => {
      const response = await request.get("/order/orderedItems");
     
      expect(response.status).toBe(200);
     
       expect(response.body.message).toBe(false)
      done();
    });
    
    
 
/*it("add New Book", async (done) => {
    const response = await request.post("/cart/addBook").send({
        book:"qwerty",
        quantity:1,
        userName:"thejesh98@gmail.com",
        totalPrice:1234
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
        userName:"thejesh07",
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
        userName:"thejesh07",
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
        userName:"thejesh07",
        totalPrice:"1234"
    });
   
   // expect(response.body.bookName).toBeTruthy();
   
    expect(response.status).toBe(200);
   
    // expect(response.body.message).toBe('Products')
    done();
  });*/
  
