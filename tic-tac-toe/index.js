const resultArea = document.getElementById('result');
const moveCounter = document.getElementById('move-counter');
const area = document.getElementById('area');
const button = document.getElementById('button');
const boxes = document.getElementsByClassName('box');
let move = 0;
let result = '';

const check = () => {
  const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (const key in winArr) {
    if (boxes[winArr[key][0]].innerHTML === '✘' && boxes[winArr[key][1]].innerHTML === '✘' && boxes[winArr[key][2]].innerHTML === '✘') {
      result = 'Crosses';
      outputResult(result);
      move = 9;
    } else if (boxes[winArr[key][0]].innerHTML === 'Ø' && boxes[winArr[key][1]].innerHTML === 'Ø' && boxes[winArr[key][2]].innerHTML === 'Ø') {
      result = 'Zeros';
      outputResult(result);
      move = 9;
    }
  }
}

const outputResult = (winner) => {
  resultArea.innerHTML = `${winner} win`;
  moveCounter.innerHTML = `Total moves: ${move}`;
}

const newGame = () => {
  resultArea.innerHTML = '';
  moveCounter.innerHTML = '';
  for (const item of boxes) {
    item.innerHTML = '';
  }
  move = 0;
}

area.addEventListener('click', (event) => {
  const target = event.target;

  if (target.className === 'box' && move < 9) {
    move % 2 === 0 ? target.innerHTML = '&#10008;' : target.innerHTML = '&#216;';
    move++;
    check();
  }
})

button.addEventListener('click', newGame);