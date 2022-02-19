const resultArea = document.getElementById('result');
const moveCounter = document.getElementById('move-counter');
const area = document.getElementById('area');
const button = document.getElementById('button');
const boxes = document.getElementsByClassName('box');
const lastGamesArea = document.getElementById('last-games');
const resultArr = JSON.parse(localStorage.getItem('last games')) || [];
let move = 0;
let result = '';

const audio = new Audio();
audio.preload = 'auto';

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
      audio.src = './assets/audio/strikethrough.mp3';
      audio.play();
      result = 'Crosses';
      outputResult(result);
      if (resultArr.length < 10) {
        resultArr.push(outputResult(result));
      } else {
        resultArr.shift();
        resultArr.push(outputResult(result));
      }
      localStorage.setItem('last games', JSON.stringify(resultArr));
      outputLastGames();
      move = 9;
    } else if (boxes[winArr[key][0]].innerHTML === 'Ø' && boxes[winArr[key][1]].innerHTML === 'Ø' && boxes[winArr[key][2]].innerHTML === 'Ø') {
      audio.src = './assets/audio/strikethrough.mp3';
      audio.play();
      result = 'Zeros';
      outputResult(result);
      if (resultArr.length < 10) {
        resultArr.push(outputResult(result));
      } else {
        resultArr.shift();
        resultArr.push(outputResult(result));
      }
      localStorage.setItem('last games', JSON.stringify(resultArr));
      outputLastGames();
      move = 9;
    }
  }
}

const outputResult = (winner) => {
  resultArea.innerHTML = `${winner} win`;
  moveCounter.innerHTML = `Total moves: ${move}`;
  return `${winner} win`;
}

const outputLastGames = () => {
  lastGamesArea.children[1].innerHTML = '';

  for (const item of resultArr) {
    const li = document.createElement('li');
    li.innerHTML = item;
    lastGamesArea.children[1].append(li);
  }
}

const newGame = () => {
  audio.src = './assets/audio/eraser.mp3';
  audio.play();
  resultArea.innerHTML = '';
  moveCounter.innerHTML = '';
  for (const item of boxes) {
    item.innerHTML = '';
  }
  move = 0;
}

area.addEventListener('click', (event) => {
  const target = event.target;

  if (target.className === 'box' && move < 9 && target.innerHTML !== '✘' && target.innerHTML !== 'Ø') {
    if (move % 2 === 0) {
      audio.src = './assets/audio/pencil-cross.mp3';
      audio.play();
      target.innerHTML = '&#10008;';
    } else {
      audio.src = './assets/audio/pencil-zero.mp3';
      audio.play();
      target.innerHTML = '&#216;';
    }

    move++;
    check();
  }
})

button.addEventListener('click', newGame);

outputLastGames();