let numSquares = 6;
let colors = []
let square = document.querySelectorAll(".square");
let pickedColor 
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let botoncito = document.querySelectorAll('.btn');


init()

function init() {
  squares();
  btn();
  reset();
  setUpBtnReset();
}


function btn() {
  for (let i = 0; i < botoncito.length; i++) {
    botoncito[i].addEventListener("click", function () {
      botoncito[0].classList.remove("selected");
      botoncito[1].classList.remove("selected");
      this.classList.add("selected")
      numSquares = this.textContent == ('Easy') ? 3 : 6


      reset()

    });
  }
}

function setUpBtnReset() {
  resetButton.addEventListener("click", function () {

    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (let i = 0; i < square.length; i++) {
      square[i].style.background = colors[i];
    }
    h1.style.background = "#232323";
  })
}

function reset(){
  colors = generateRandomColors(numSquares)
  pickedColor=pickColor()
  colorDisplay.textContent=pickedColor
  for (let i = 0; i < square.length; i++) {
    if(colors[i]){
    square[i].style.background=colors[i]
    square[i].style.display="block"
  }else{
    square[i].style.display="none"
  }
  }
  h1.style.background="#232323"
  messageDisplay.textContent=""
  resetButton.textContent="New Colors"
}

colorDisplay.textContent = pickedColor;

function squares () {
  for (let i = 0; i < square.length; i++) {
      
    square[i].style.backgroundColor = colors[i]

    square[i].addEventListener("click", function(){

        let clickedColor = this.style.backgroundColor
        if (clickedColor !== pickedColor) {

            this.style.backgroundColor = "#232323"
            message.textContent = "Try Again"

        }else{

            message.textContent = "Correct! "
            h1.style.backgroundColor = pickedColor
            changeColors(pickedColor)
            containerButtons.style.backgroundColor = "rgb(224, 235, 161)"
            resetButton.textContent = "Play Again?"     
        }
    })    
  }
}

function changeColors(color) {

  for (let i = 0; i < square.length; i++) {

    square[i].style.background = color;
  }

}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num) {

  let arr = []

  for (let i = 0; i < num; i++) {
    arr.push(randomColor())

  }

  return arr;
}

function randomColor() {

  let r = Math.floor(Math.random() * 255)

  let g = Math.floor(Math.random() * 255)

  let b = Math.floor(Math.random() * 255)

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
