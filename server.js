const express = require("express");

const app = express();

app.use(express.json());

const Math = require('./Math');
const messages = require("dote/src/messages");

console.log(Math.add(9, 9));

console.log(Math.subtract(90, 8));

console.log(Math.Mutiply(9, 90, 89));

console.log(Math.handleButton(90)); 

const todos = [ {
    id: 1, names: "tolalope", completed: false },

  {  id: 2, names: "ogoba", completed: false  }
]
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },  
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
]



app.post("/books", (req,res) => {
 
    const {title, author} = req.body;
    if (! title || !author) {
      return res.status(400).json({ messages:" All field sare important!!!!!!!!!!!!!!!!!!!!"})
    }

  const newbooks = {id: books.length + 1, ...req.body}= req.body;
 if (!title || !author) {
  res.status(400).json({"message": "fill it our correctly!!!!!!!!!!!!!"})
  
 }
 console.log(books);


}



)

app.get("/books", (req, res) => {
  res.status(200).json({books})
  books.push(newbooks);
});


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


//const express = require("express");
//import cors from "cors";

//app.use(cors());


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
   res.status(200).send( " Product Api created sucessfully ! " )
});

app.get("/todos", (req, res) => {
  res.status(200).json(todos)
});

 app.post("/todos", (req, res) => {
    const newTodo = {id : todos.length + 1, ...req.body }
    todos.push(newTodo)
    res.status(201).json(newTodo)

 } );

// function Dobluyusss() {
  

app.get('/studentss', (req, res) => {
  res.json(students)
});



app.listen(4000, () => {
  console.log("Server is running on port 4000 ");
});
