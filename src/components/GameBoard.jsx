const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBord() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, index) => {
        <li key={index}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>;
      })}
    </ol>
  );
}
