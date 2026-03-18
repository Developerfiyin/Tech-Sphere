function Dobluyusss() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Dobluyusss) {

        resolve("I know you are a goat!! why don't you think it too");
      } else {
        reject("Get out of my face!!!!! I order you ");
      }
    }, 2000); 
  });
}

async function ShartMehn() {
  const DobluyusssInthechat = await Dobluyusss();
  console.log(DobluyusssInthechat);
}
ShartMehn();

import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.send(" Hello World")
});

app.listen(3000, () => {
  console.log("Server is running ");
  
})