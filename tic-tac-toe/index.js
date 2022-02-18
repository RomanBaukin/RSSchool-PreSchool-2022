const area = document.getElementById('area');
let move = 0;
let result = '';

area.addEventListener('click', (event) => {
  const target = event.target;

  if (target.className === 'box') {
    move % 2 === 0 ? target.innerHTML = '&#10008;' : target.innerHTML = '&#216;';
    move++;
    check();
  }

})

const check = () => {
  const boxes = document.getElementsByClassName('box');
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
      result = 'крестики';
      outputResult(result);
    } else if (boxes[winArr[key][0]].innerHTML === 'Ø' && boxes[winArr[key][1]].innerHTML === 'Ø' && boxes[winArr[key][2]].innerHTML === 'Ø') {
      result = 'нолики';
      outputResult(result);
    }
  }
}

const outputResult = (winner) => {
  console.log(`Победили ${winner}`);
}