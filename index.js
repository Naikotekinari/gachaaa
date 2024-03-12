import { charas } from "./chara.js";

import { saveData } from "./savedata.js";

console.log(charas);

let saveDataLocal = saveData;
console.log(saveDataLocal);

const charaArrayButton = document.getElementById("charaArrayButton");
const output = document.getElementById("output");
const charaBar = document.getElementById("charaBar").getElementsByTagName("li");
console.log(charaBar[1]);

let cS = [];

for (let i = 0; i < saveDataLocal.length; i++) {
  for (let ie = 0; ie < charas.length; ie++) {
    if (saveDataLocal[i][0] === charas[ie][0]) {
      cS[i] = charas[ie][0];
      break;
    } else {
      console.log("loop");
    }
  }
  console.log(cS[i]);
  saveDataLocal[i][3] =
    saveDataLocal[i][1] + saveDataLocal[i][2] - charas[cS[i]][2];
  console.log(saveDataLocal[i][3]);
}

saveDataLocal = saveDataLocal.sort(charaPriority);
console.log(saveDataLocal + " savedatalocal");
console.log(saveDataLocal[0]);

//let charaBarImg = document.getElementsByTagName("img");

console.log(charaBar);
//console.log(charaBarImg + " ah");

/* function charaPriority(a, b) {
  console.log(a[3] + " " + b[3]);
  if (a[3] === b[3]) {
    return 0;
  } else if (a[3] > b[3]) {
    return 0;
  } else {
    return a[3] < b[3] ? -1 : 1;
  }
} */

function charaPriority(a, b) {
  if (a[3] === b[3]) {
    return 0;
  }
  return a[3] < b[3] ? -1 : 1;
}

function charaPortraits() {
  for (let i = 0; i < saveDataLocal.length; i++) {
    if (saveDataLocal[i] != "undefined") {
      //if (saveDataLocal[i][5] > 0) {
      charaBar[i].innerHTML = `${charas[saveDataLocal[i][0]][3]}`;
      console.log("character have :>");
      /*} else {
        charaBar[i].innerHTML = `${charas[i][4]}`;
        console.log("no character have :<");
      }*/
    } else {
      console.log("oops");
    }
  }
  console.log(charaBar);
}

charaArrayButton.addEventListener("click", function () {
  console.log(charas[2]);
  console.log("family guy");
  console.log(charaBar);
  charaPortraits();
  /*output.innerHTML = `
    <p> ${charas} </p>
    <p> among us </p>
    `;*/
});
