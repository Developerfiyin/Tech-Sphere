// function Dobluyusss() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Dobluyusss) {

//         resolve("I know you are a goat!! why don't you think it too");
//       } else {
//         reject("Get out of my face!!!!! I order you ");
//       }
//     }, 2000);
//   });
// }

// try {
//   console.log(" what are you looking for ");
//   console.log("okay jaw naw, i had a dream ");
//   console.log(okay);
// } catch (err) {
//   console.error("Your error is ", err);
// } finally {
//   console.log("i will execte anyways");
// }
// async function ShartMehn() {
//   const DobluyusssInthechat = await Dobluyusss();
//   console.log(DobluyusssInthechat);
// }
// ShartMehn();

import express from "express";
//const express = require("express");
//import cors from "cors";
const app = express();

//app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send(" Hello World !!!!!!!!!!");
});
let students = [];

app.get("/students", (req, res) => {
  res.send("Dobluyuss in the chat Mehn !");
});

app.post("/students", (req, res) => {
  const {name , email, age} = req.body
  if (!name || !email || !age) {
    return res.status(400).send
    ("All files are required!")
  }
 
   const student = {name ,email, age}
   students.push(student)
  
   res.status(200).send(" Product Api created sucessfully!")
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 ");
});
