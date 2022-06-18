const tds = document.querySelectorAll("td");
const info = document.querySelector("#extra-info");
const again = document.querySelector("#again");
const board = [[], [], []];
let turn = "X";

tds.forEach((td) => td.addEventListener("click", handleClick));

function handleClick(e) {
  if (!e.target.textContent) {
    const key = e.target.dataset.key;
    board[Number(key[0])][Number(key[1])] = turn;
    e.target.textContent = turn;
    turn = turn === "X" ? "O" : "X";
    info.textContent = `Turn: ${turn} Player`;

    const winner = detWinner(board);

    if (winner === "Draw") {
      tds.forEach((td) => td.removeEventListener("click", handleClick, false));
      info.textContent = "Winner: Draw";
      again.classList.remove("d-none");
    }

    if (winner !== "Pending") {
      tds.forEach((td) => td.removeEventListener("click", handleClick, false));
      info.textContent = `Winner: ${winner}`;
      again.classList.remove("d-none");
    }
  }
}

function detWinner(board) {
  if (
    board[0][0] === board[0][1] &&
    board[0][1] === board[0][2] &&
    board[0][2] !== undefined
  )
    return board[0][2];

  if (
    board[1][0] === board[1][1] &&
    board[1][1] === board[1][2] &&
    board[1][2] !== undefined
  )
    return board[1][2];

  if (
    board[2][0] === board[2][1] &&
    board[2][1] === board[2][2] &&
    board[2][2] !== undefined
  )
    return board[2][2];

  if (
    board[0][0] === board[1][0] &&
    board[1][0] === board[2][0] &&
    board[2][0] !== undefined
  )
    return board[2][0];

  if (
    board[0][1] === board[1][1] &&
    board[1][1] === board[2][1] &&
    board[2][1] !== undefined
  )
    return board[2][1];

  if (
    board[0][2] === board[1][2] &&
    board[1][2] === board[2][2] &&
    board[2][2] !== undefined
  )
    return board[2][2];

  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[2][2] !== undefined
  )
    return board[2][2];

  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[2][0] !== undefined
  )
    return board[2][0];

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === undefined) return "Pending";
    }
  }

  return "Draw";
}
