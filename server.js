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
  const DobluyusssRese = await Dobluyusss();
  console.log(DobluyusssRese);
}
ShartMehn();
