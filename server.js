function Dobluyusss() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Dobluyusss) {
        const Dobluyusss = true;

        resolve("I know you are a goat!!");
      } else {
        reject("Getout of my face!!!!!!");
      }
    }, 2000);
  });
}

async function ShartMehn() {
  const DobluyusssRese = await Dobluyusss();
  console.log(DobluyusssRese);
}
ShartMehn();
