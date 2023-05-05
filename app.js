// >>1>>_______________________________PASSWORD ENCRYPTION___________________________________________-
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// import bcrypt from 'bcrypt'
const app = express();
const port = 3000;
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post('/hashpass', async (req, res) => {
//         const hashedpass = await bcrypt.hash(req.body.pass, 12)
//         res.json({ "email": req.body.email, "password": hashedpass })

//      });
// >>2>>_________________MULTI USER DETAILS IN GIVEN GET ONE USER DETAILS BY USING USER NAME_________________________________________
// let student = [
//             {
//                 "name": "kowsi",
//                 "depp": "cse",
//                 "cgpa": "90"
//             },
//             {
//                 "name": "abi",
//                 "depp": "it",
//                 "cgpa": "90"
//             }
//         ]

//         app.post('/loggin',async(req, res) =>{
//             let a=student.find((v)=>v.name===req.body.name)
//             console.log(a);
//         if (a!=undefined){
//             res.json(a)
//             }
//         else {
//             res.json({"error":"User not found"})
//             }
//         });
// >>3>>______________________JWT TOKEN GENERATING______________________________________


// let data = [{
//         username: "kowsi",
//         password: "kowsi@123",
// },
// {
//         username: "abi",
//         password: "abi@123",
// },
// {
//         username: "nisha",
//         password: "nisha@123",
// },
// ]
// app.post("/token", async (req, res) => {

//         let a = data.find((v) => (v.username === req.body.username) && (v.password === req.body.password))

//         console.log(a);


//         if (a != undefined) {

//                 let key = process.env.SECRET_KEY;
//                 console.log(key);
//                 const token = jwt.sign(a, key);
//                 res.json({ token1: token });
//         } else {

//                 res.send({ message: "data not found" });
//         }
// });
app.listen(3000, () => {
        console.log("server is running");
});


