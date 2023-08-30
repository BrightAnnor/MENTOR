const express = require('express');
const dotenv = require('dotenv');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const userRoute = require('./routes/userRoute')

// configure dotenv
dotenv.config();

//port
const port = process.env.PORT || 5555

//server
const app = express();

//setting view
app.set('view engine','ejs')
app.use(expressLayouts)


//middleware
app.use('/',userRoute)
app.use(express.static('public'))




const startServer = ()=>{
    try {

        app.listen(port,()=>{
            console.log(`server runing on http://localhost:${port}`)
        })
        
    } catch (e) {
        console.log(e)
    }
};

startServer()