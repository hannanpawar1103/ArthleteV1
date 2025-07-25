import dotenv from "dotenv"
import connectDB from "./src/db/index.js";
import {app} from './src/app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT , "0.0.0.0" , () => {
        console.log(`Server is running at port : ${process.env.PORT} `);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


