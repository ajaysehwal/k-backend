const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
const OurApp=require('./api/index');
const path = require('path')

async function StartServer(){
 const app=express();
 var corsOptions = {
    origin: 'https://dreamdesignarchitects.vercel.app',
    optionsSuccessStatus: 200 
  }
 app.use(cors(corsOptions));
OurApp(app)
app.use('/static', express.static(path.join(__dirname, 'assets')))
 app.listen(8000,()=>{
    console.log('Server running on 8000')
 }).on('error',(err)=>{
    console.log(err);  
    process.exit();
 })
}
StartServer();
