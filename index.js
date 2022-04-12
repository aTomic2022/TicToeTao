console.log('pasileido')

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

pradeti()
function pradeti(){
let cells = document.getElementsByClassName('cell')
let isFirst = false
let kiekis = 0
     
for (let key=0; key < cells.length; key++) {
    cells[key].addEventListener('click', function onClick(){
     isFirst = !isFirst;
     kiekis = kiekis + 1;
     if (kiekis === 9){alert(
       'Lygiosios')
       document.getElementById("board").style.display = "none"
       document.getElementById("onclick").style.display = "block"
      }
     if (isFirst === true) {
     
    cells[key].textContent = "X"
    // console.log(cells[key].textContent)
    winnerCheck()
     } else {
      cells[key].textContent = "O"
    winnerCheck()
     }
    },
    {once : true});
}

function winnerCheck(){
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++){
    let winDiv1 = cells[WINNING_COMBINATIONS[i][0]];
    let winDiv2 = cells[WINNING_COMBINATIONS[i][1]];
  let winDiv3 = cells[WINNING_COMBINATIONS[i][2]];

 if (winDiv1.textContent === 'X' && winDiv2.textContent === 'X' && winDiv3.textContent === 'X'){
      alert ('X laimejo')
      document.getElementById("board").style.display = "none"
      document.getElementById("onclick").style.display = "block"
      kiekis = 0
      
  }
  else if (winDiv1.textContent === 'O' && winDiv2.textContent === 'O' && winDiv3.textContent === 'O'){
      alert ('O laimejo')
      document.getElementById("board").style.display = "none"
      document.getElementById("onclick").style.display = "block"
      kiekis = 0
     
}
} 
}
}
function perkrovimas() {
    alert('Pasiruoškite netrukus pradėsim žaiddimą :D')
    document.getElementById("board").style.display = "grid"
    document.getElementById("onclick").style.display = "none"
    isFirst = false
    kiekis = 0
    cells = document.getElementsByClassName('cell')
    for (let key = 0; key < cells.length; key++) {
      cells[key].textContent = '';}
      pradeti()
}