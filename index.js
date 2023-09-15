// import modoules
import  express  from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import staf from "./routes/stafs.js";
import students from "./routes/students.js";

//env var
dotenv.config();
// env port
const PORT = process.env.PORT || 6060;
//express init
const app = express();
//static folder
app.use(express.static("public"))
//server medolower
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//app routes
app.use(staf)
app.use(students)
//server listen
app.listen(PORT,(req,res)=>{
    console.log(`server running on port ${PORT}`.bgGreen.black);
})