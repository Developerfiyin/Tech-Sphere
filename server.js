function Dobluyusss() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const Alhaji = true;
      if (Alhaji) {
        resolve(" OKay so wetin happen");
      } else {
        reject(" You dey go naw");
      }
     }, 2000);
    });
  };


async function ShartMehn() {
  const DobluyusssRese = await Dobluyusss();
  console.log(DobluyusssRese);
}
ShartMehn();
