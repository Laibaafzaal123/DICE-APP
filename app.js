function rollDice() {
    const result = document.getElementById("result");
    const roll = Math.floor(Math.random() * 6) ;//0-6 if agr +nah hun tun tu bhii hu skhata hnn
    const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]; //js take emojis as a text as compared to image it is difficult
    result.innerHTML = diceFaces[roll];//4-1=3 or 1-1=0 aur yahn - bhii nh kren  tu bhii aisay hii huga
  }
//   function rollDice() {
//     const result = document.getElementById("result");
//     const roll = Math.floor(Math.random() * 6) + 1;//1-6 if agr +nah hun tun tu bhii hu skhata hnn
//     const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]; //js take emojis as a text as compared to image it is difficult
//     result.innerHTML = diceFaces[roll - 1];//4-1=3 or 1-1=0 aur yahn - bhii nh kren  tu bhii aisay hii huga
//   }