const box = document.querySelectorAll(".box");
const box_text = document.querySelectorAll(".box_text");
const winner1 = document.querySelector(".winner");
const error_message = document.querySelector(".error");
let box_text1 = "X";
function change_box_text() {
  if (box_text1 == "X") {
    box_text1 = "O";
  } else {
    box_text1 = "X";
  }
}
function checker(i) {
  if (box[i].innerText == "") {
    return true;
  }
  return false;
}
for (let item = 0; item < box.length; item++) {
  box[item].addEventListener("click", () => {
    change_box_text();

    if (checker(item)) {
      box[item].innerText = box_text1;
    } else {
      error_message.innerText = "Bu dama doludur boş damaya tıklayın";
      box[item].style.border = "2px solid red";
      setTimeout(() => {
        box[item].style.border = "1px solid black";
        error_message.innerText = "";
      }, 2500);
    }
    if (winner()) {
      for (let item of box) {
        item.style.pointerEvents = "none";
      }
    }
  });
}
function winner() {
  if (
    box[0].innerText == box[1].innerText &&
    box[0].innerText == box[2].innerText &&
    box[0].innerText != "" &&
    box[1].innerText != "" &&
    box[2].innerText != ""
  ) {
    winner1.innerText = `Winner is ${box[0].innerText} `;

    return true;
  }
  if (
    box[3].innerText == box[4].innerText &&
    box[3].innerText == box[5].innerText &&
    box[3].innerText != "" &&
    box[4].innerText != "" &&
    box[5].innerText != ""
  ) {
    winner1.innerText = `Winner is ${box[3].innerText} `;
    return true;
  }
  if (
    box[6].innerText == box[7].innerText &&
    box[6].innerText == box[8].innerText &&
    box[6].innerText != "" &&
    box[7].innerText != "" &&
    box[8].innerText != ""
  ) {
    winner1.innerText = `Winner is ${box[6].innerText} `;
    return true;
  }
  if (
    box[0].innerText == box[3].innerText &&
    box[0].innerText == box[6].innerText &&
    box[0].innerText != "" &&
    box[3].innerText != "" &&
    box[6].innerText != ""
  ) {
    winner1.innerText = `Winner is ${box[6].innerText} `;
    return true;
  }
  if (
    box[1].innerText == box[4].innerText &&
    box[1].innerText == box[7].innerText &&
    box[1].innerText != "" &&
    box[4].innerText != "" &&
    box[7].innerText != ""
  ) {
    winner1.innerText = `Winner is ${box[1].innerText} `;
    return true;
  }
  if (
    box[2].innerText == box[5].innerText &&
    box[2].innerText == box[8].innerText &&
    box[2].innerText != "" &&
    box[5].innerText != "" &&
    box[8].innerText != ""
  ) {
    winner1.innerText = `Winner is ${box[2].innerText} `;
    return true;
  }
  if (
    box[0].innerText == box[4].innerText &&
    box[0].innerText == box[8].innerText &&
    box[0].innerText != "" &&
    box[4].innerText != "" &&
    box[8].innerText != ""
  ) {
    winner1.innerText = `Winner is ${box[0].innerText} `;
    return true;
  }
  if (
    box[2].innerText == box[4].innerText &&
    box[2].innerText == box[6].innerText &&
    box[2].innerText != "" &&
    box[4].innerText != "" &&
    box[6].innerText != ""
  ) {
    winner1.innerText = `Winner is ${box[2].innerText} `;
    return true;
  }
}
