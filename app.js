const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const productController=require('./src/Controllers/productController.js')
const userController=require('./src/Controllers/userController.js');
const cartController=require('./src/Controllers/cartController.js');

const config=require('./src/Config');
app.set('port',4000);
app.use(cors());
app.use('/api',userController);
app.use('/api',productController);
app.use('/api',cartController);

mongoose.connect(config.getDbConnectionString(),{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
    console.log('Connected to MongoDB')
    app.listen(app.get('port'),function(){
        console.log('API Server Listening on port ' +app.get('port') + '!')
    })
    
})
