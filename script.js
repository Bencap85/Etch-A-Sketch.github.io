function start() {
  createDivs();
  addListenersToButtons();
  changePenToBlack();
  //changeButtonColorOnClick(document.getElementById('black-button'));
  
}
function createDivs() {
  let container = document.getElementById("board-container");
  container.innerHTML = createContainerDivString();
  
}
function createDivString(start) {
  return `<div class='pixel' style='grid-column: ${start}/${start+1}'></div>`;
}
function createContainerDivString() {
  let str = "";
  for(let x = 0; x < 21; x++) {
    for(let i = 1; i < 21; i++) {
      str += createDivString(i);
    }
  }
  return str;
}
function getRandomColor() {
  let num = getRandomInt(0, 7);
  let color;
  if(num === 0)
    color = "red";
  if(num === 1)
    color = "orange";
  if(num === 2)
    color = "yellow";
  if(num === 3)
    color = "green";
  if(num === 4) 
    color = "blue";
  if(num === 5) 
    color = "indigo";
  if(num === 6)
    color = "violet";
  // if(num === 7) 
  //   color = "black";
  // if(num === 8) 
  //   color = "orange";
  // if(num === 9)
  //   color = "purple";
  return color;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}



//Add button functionality here
function addListenersToButtons() {
  
  let blackBtn = document.getElementById('black-button');
  blackBtn.addEventListener('click', () => {
    changePenToBlack();
    changeButtonColorOnClick(blackBtn);
  });
  
  let rainbowBtn = document.getElementById('rainbow-button');
  rainbowBtn.addEventListener('click', () => {
    changePenToRainbow();
    changeButtonColorOnClick(rainbowBtn);
  });
  
  let eraserBtn = document.getElementById('eraser-button');
  eraserBtn.addEventListener('click', () => {
    changePenToWhite();
    changeButtonColorOnClick(eraserBtn);
  });
  
  let resetBtn = document.getElementById('reset-button');
  resetBtn.addEventListener('click', () => {
    resetBoard();
    
  });
}

function changePenToBlack() {
  let divs = document.querySelectorAll(".pixel");
  divs.forEach(
    function(div) {
      
      //clone node to remove eventlisteners
      newDiv = div.cloneNode(true);
      newDiv.addEventListener("mouseenter", setBackgroundToBlack.bind(this, newDiv)
  
      );
      newDiv.addEventListener("mouseleave", setBackgroundToBlack.bind(this, newDiv)

      );
      div.parentNode.replaceChild(newDiv, div);
    }
  );
  
 }
function changePenToRainbow() {
  let divs = document.querySelectorAll(".pixel");
  divs.forEach(
    function(div) {
      
      //clone node to remove eventlisteners
      newDiv = div.cloneNode(true);
      newDiv.addEventListener("mouseenter", setBackgroundToRainbow.bind(this, newDiv)
  
      );
      newDiv.addEventListener("mouseleave", setBackgroundToRainbow.bind(this, newDiv)

      );
      div.parentNode.replaceChild(newDiv, div);
    }
  );
  
 }
function changePenToWhite() {
  let divs = document.querySelectorAll(".pixel");
  divs.forEach(
    function(div) {
      
      //clone node to remove eventlisteners
      newDiv = div.cloneNode(true);
      newDiv.addEventListener("mouseenter", setBackgroundToWhite.bind(this, newDiv)
  
      );
      newDiv.addEventListener("mouseleave", setBackgroundToWhite.bind(this, newDiv)

      );
      div.parentNode.replaceChild(newDiv, div);
    }
  );
  
 }
function resetBoard() {
  let divs = document.querySelectorAll(".pixel");
  divs.forEach(
    function(div) {
      div.style['background-color'] = "white";
    }
  );
}

function setBackgroundToBlack(div) {
  div.style['background-color'] = 'black';
}
function setBackgroundToRainbow(div) {
  div.style['background-color'] = getRandomColor();
}
function setBackgroundToWhite(div) {
  div.style['background-color'] = "white";
}
function changeButtonColorOnClick(button) {
  
  
  resetButtonColorsAfterClick();
  
  let currentClass = button.className;
  if(currentClass === 'notclicked') {
    button.className = 'clicked';
  }
  else {
    button.className = 'notclicked';
  }
  
}
function resetButtonColorsAfterClick() {
    let btns = document.querySelectorAll('button');
    btns.forEach(function(button) {
      button.className = 'notclicked';
    });
  }
