const chessBoard = ["R1", "N1", "B1", "Q", "K", "B2", "N2", "R2"]

const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

while (true) {
  shuffle(chessBoard)
  if ((chessBoard.indexOf("K") > chessBoard.indexOf("R1") && chessBoard.indexOf("K") < chessBoard.indexOf("R2") || chessBoard.indexOf("K") < chessBoard.indexOf("R1") && chessBoard.indexOf("K") > chessBoard.indexOf("R2")) && (chessBoard.indexOf("B1") % 2 === 1 && chessBoard.indexOf("B2") % 2 === 0 || chessBoard.indexOf("B1") % 2 === 0 && chessBoard.indexOf("B2") % 2 === 1)) {
    break; 
  }
}

console.log(chessBoard)
