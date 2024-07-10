export default function GameBoard({ onSelectSquare, board }) {
  // Changing It To App.Jsx For Better State Management (Lift Up)
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleButtonClick(rowIndex, colIndex) {
  //   setGameBoard((prevGameboard) => {
  //     const updatedBoard = [
  //       ...prevGameboard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null ? true : false}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
