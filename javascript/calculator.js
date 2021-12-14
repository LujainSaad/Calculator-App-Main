"use strict";
// calculator
let input = document.querySelector(".calculator-screen");
let n = document.querySelectorAll(".btn").length;

let op = "";
let current;
let previous;

for (let i = 0; i < n; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    let b = this.value;
    if (!isNaN(b) || b == ".") {
      input.value += this.value;
      current = parseFloat(input.value);
    } else if (b == "*" || b == "+" || b == "-" || b == "/") {
      input.placeholder = input.value;
      op = b;
      previous = current;
      input.value = "";
    } else if ((b == "=") & previous) {
      let result = 0;
      let x = previous;
      let y = current;
      op == "+"
        ? (result = x + y)
        : "-"
        ? (result = x - y)
        : "*"
        ? (result = x * y)
        : "/"
        ? (result = x / y)
        : null;
      input.value = result;
      current = parseFloat(input.value);
    } else if (b == "del") {
      input.value
        ? (input.value = parseFloat(current.toString().slice(0, -1)))
        : "";
      current = parseFloat(input.value);
    } else if (b == "rest") {
      input.value = "";
      input.placeholder = "";
    }
  });
}

//theme changing
let btnContainer = document.querySelector(".calculator-keys");
let btnFont1 = document.querySelectorAll(".btn__font-lg");
let btnFont2 = document.querySelectorAll(".btn__font-sm");
let btnColor1 = document.querySelectorAll(".btn__color-1");
let btnShadow1 = document.querySelectorAll(".btn__color-1");
let btnColor2 = document.querySelectorAll(".btn__color-2");
let btnShadow2 = document.querySelectorAll(".btn__color-2");
let btnColor3 = document.querySelectorAll(".btn__color-3");
let btnShadow3 = document.querySelectorAll(".btn__color-3");

let input1 = document.querySelector(".calculator-screen");
let radioBtn = document.querySelectorAll(".radio__button");
let radioBG = document.querySelector(".radio__background");
let radioNo = document.querySelectorAll(".radio__no");
let headP = document.querySelector(".heading-primary");
let headS = document.querySelector(".heading-secondary");

let body = document.querySelector("body");

//let color = "";

if (document.querySelector('input[name="theme"]')) {
  document.querySelectorAll('input[name="theme"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
      let color = event.target.id;
      console.log(color);

      if (color == "blue") {
        btnContainer.style.backgroundColor = "hsl(223, 31%, 20%)";
        for (let i = 0; i < btnFont1.length; i++) {
          btnFont1[i].style.color = "hsl(223, 31%, 20%)";
        }
        for (let i = 0; i < btnFont2.length; i++) {
          btnFont2[i].style.color = "white";
        }
        for (let i = 0; i < btnColor1.length; i++) {
          btnColor1[i].style.backgroundColor = "hsl(45, 7%, 89%)";
        }
        for (let i = 0; i < btnShadow1.length; i++) {
          btnShadow1[i].style.borderBottomColor = "hsl(35, 11%, 61%)";
        }
        for (let i = 0; i < btnColor2.length; i++) {
          btnColor2[i].style.backgroundColor = "hsl(225, 21%, 49%)";
        }
        for (let i = 0; i < btnShadow2.length; i++) {
          btnShadow2[i].style.borderBottomColor = "hsl(224, 28%, 35%)";
        }
        for (let i = 0; i < btnColor3.length; i++) {
          btnColor3[i].style.backgroundColor = "hsl(6, 63%, 50%)";
        }
        for (let i = 0; i < btnShadow3.length; i++) {
          btnShadow3[i].style.borderBottomColor = "hsl(6, 70%, 34%)";
        }
        input1.style.backgroundColor = "hsl(224, 36%, 15%)";
        input1.style.color = "white";
        for (let i = 0; i < radioBtn.length; i++) {
          radioBtn[i].style.backgroundColor = "hsl(6, 63%, 50%)";
        }
        radioBG.style.backgroundColor = "hsl(224, 36%, 15%)";
        for (let i = 0; i < radioNo.length; i++) {
          radioNo[i].style.color = "white";
        }
        headP.style.color = "white";
        headS.style.color = "white";

        body.style.backgroundColor = "hsl(222, 26%, 31%)";
      }

      if (color == "white") {
        btnContainer.style.backgroundColor = " hsl(0, 5%, 81%)";
        for (let i = 0; i < btnFont1.length; i++) {
          btnFont1[i].style.color = "hsl(60, 10%, 19%)";
        }
        for (let i = 0; i < btnFont2.length; i++) {
          btnFont2[i].style.color = "white";
        }
        for (let i = 0; i < btnColor1.length; i++) {
          btnColor1[i].style.backgroundColor = "hsl(45, 7%, 89%)";
        }
        for (let i = 0; i < btnShadow1.length; i++) {
          btnShadow1[i].style.borderBottomColor = "hsl(35, 11%, 61%)";
        }
        for (let i = 0; i < btnColor2.length; i++) {
          btnColor2[i].style.backgroundColor = "hsl(185, 42%, 37%)";
        }
        for (let i = 0; i < btnShadow2.length; i++) {
          btnShadow2[i].style.borderBottomColor = "hsl(185, 58%, 25%)";
        }
        for (let i = 0; i < btnColor3.length; i++) {
          btnColor3[i].style.backgroundColor = "hsl(25, 98%, 40%)";
        }
        for (let i = 0; i < btnShadow3.length; i++) {
          btnShadow3[i].style.borderBottomColor = "hsl(25, 99%, 27%)";
        }
        input1.style.backgroundColor = "hsl(0, 0%, 93%)";
        input1.style.color = "hsl(60, 10%, 19%)";
        for (let i = 0; i < radioBtn.length; i++) {
          radioBtn[i].style.backgroundColor = "hsl(25, 98%, 40%)";
        }
        radioBG.style.backgroundColor = "hsl(0, 0%, 93%)";

        for (let i = 0; i < radioNo.length; i++) {
          radioNo[i].style.color = "hsl(60, 10%, 19%)";
        }
        headP.style.color = "hsl(60, 10%, 19%)";
        headS.style.color = "hsl(60, 10%, 19%)";

        body.style.backgroundColor = "hsl(0, 0%, 90%)";
      }

      if (color == "purple") {
        btnContainer.style.backgroundColor = " hsl(268, 71%, 12%)";
        for (let i = 0; i < btnFont1.length; i++) {
          btnFont1[i].style.color = "hsl(52, 100%, 62%)";
        }
        for (let i = 0; i < btnFont2.length; i++) {
          btnFont2[i].style.color = "white";
        }
        for (let i = 0; i < btnColor1.length; i++) {
          btnColor1[i].style.backgroundColor = "hsl(268, 47%, 21%)";
        }
        for (let i = 0; i < btnShadow1.length; i++) {
          btnShadow1[i].style.borderBottomColor = "hsl(290, 70%, 36%)";
        }
        for (let i = 0; i < btnColor2.length; i++) {
          btnColor2[i].style.backgroundColor = "hsl(281, 89%, 26%)";
        }
        for (let i = 0; i < btnShadow2.length; i++) {
          btnShadow2[i].style.borderBottomColor = "hsl(285, 91%, 52%)";
        }
        for (let i = 0; i < btnColor3.length; i++) {
          btnColor3[i].style.backgroundColor = "hsl(176, 100%, 44%)";
        }
        for (let i = 0; i < btnShadow3.length; i++) {
          btnShadow3[i].style.borderBottomColor = "hsl(177, 92%, 70%)";
        }
        input1.style.backgroundColor = "hsl(268, 71%, 12%)";
        input1.style.color = "hsl(52, 100%, 62%)";
        for (let i = 0; i < radioBtn.length; i++) {
          radioBtn[i].style.backgroundColor = "hsl(176, 100%, 44%)";
        }
        radioBG.style.backgroundColor = "hsl(268, 71%, 12%)";
        for (let i = 0; i < radioNo.length; i++) {
          radioNo[i].style.color = "hsl(52, 100%, 62%)";
        }
        headP.style.color = "hsl(52, 100%, 62%)";
        headS.style.color = "hsl(52, 100%, 62%)";

        body.style.backgroundColor = " hsl(268, 75%, 9%)";
      }
    });
  });
}
