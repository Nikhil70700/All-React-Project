// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import Card from "../card/Card";
// import "./Grid.css";
// import "react-toastify/dist/ReactToastify.css";


// function isWinner(board, symbol) {
//   if (board[0] == board[1] && board[1] == board[2] && board[2] == symbol)
//     return symbol;
//   if (board[3] == board[4] && board[4] == board[5] && board[5] == symbol)
//     return symbol;
//   if (board[6] == board[7] && board[7] == board[8] && board[8] == symbol)
//     return symbol;

//   if (board[0] == board[3] && board[3] == board[6] && board[3] == symbol)
//     return symbol;
//   if (board[1] == board[4] && board[4] == board[7] && board[4] == symbol)
//     return symbol;
//   if (board[2] == board[5] && board[5] == board[8] && board[5] == symbol)
//     return symbol;

//   if (board[0] == board[4] && board[4] == board[8] && board[4] == symbol)
//     return symbol;
//   if (board[2] == board[4] && board[4] == board[6] && board[4] == symbol)
//     return symbol;

//   return "";
// }

// function Grid({ numberOfCard }) {
//   const [turn, setTurn] = useState(true); // false-> x , true-> 0
//   const [board, setBoard] = useState(Array(numberOfCard).fill("")); //["",",","",""] board will look like this
//   const [winner, setWinner] = useState(null);

//   function play(index) {
//     console.log("move played", index);
//     if (turn == true) {
//       board[index] = "O";
//     } else {
//       board[index] = "X";
//     }

//     const win = isWinner(board, turn ? "O" : "X");
//     console.log("Winner is:", win);
//     if (win) {
//       setWinner(win);
//       toast.success(`Congratulations ${win} win the game !!`);
//     }
//     setBoard([...board]);
//     setTurn(!turn);
//   }

//   function reset() {
//     setBoard(Array(numberOfCard).fill(""));
//     setWinner(null);
//     setTurn(true);
//   }

//   return (
//     <div className="grid-wrapper">
//       {winner && (
//         <>
//           <h1 className="turn-highlight">Winner is {winner}</h1>
//           <button className="reset" onClick={reset}>
//             Reset game
//           </button>
//           <ToastContainer
//             position="top-right"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//           />
//         </>
//       )}

//       <h1 className="turn-highlight">Current Turn: {turn ? "O" : "X"}</h1>
//       <div className="grid">
//         {board.map((value, idx) => {
//           return (
//             <Card
//               gameEnd={winner ? true : false}
//               onPlay={play}
//               player={value}
//               key={idx}
//               index={idx}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Grid;



import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Card from "../card/Card";
import "./Grid.css";
import "react-toastify/dist/ReactToastify.css";

function isWinner(board, symbol) {
    const winningCombinations = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Column 1
        [1, 4, 7], // Column 2
        [2, 5, 8], // Column 3
        [0, 4, 8], // Diagonal
        [2, 4, 6], // Diagonal
    ];

    for (let combo of winningCombinations) {
        if (board[combo[0]] === symbol && board[combo[1]] === symbol && board[combo[2]] === symbol) {
            return symbol;
        }
    }
    return "";
}

function Grid({ numberOfCard }) {
    const [turn, setTurn] = useState(true); // true -> "O", false -> "X"
    const [board, setBoard] = useState(Array(numberOfCard).fill("")); // Initialize board
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (board[index] !== "") return; // Prevent overriding an existing move

        const newBoard = [...board]; // Create a new board array
        newBoard[index] = turn ? "O" : "X";

        const win = isWinner(newBoard, turn ? "O" : "X");
        if (win) {
            setWinner(win);
            toast.success(`🦄 Wow so easy! > ${win} <  wins the game!`);
        }

        setBoard(newBoard);
        setTurn(!turn);
    }

    function reset() {
        setBoard(Array(numberOfCard).fill(""));
        setWinner(null);
        setTurn(true);
    }

    return (
        <div className="grid-wrapper">
            {winner && (
                <>
                    <h1 className="turn-highlight">Winner is {winner}</h1>
                    <button className="reset" onClick={reset}>
                        Reset game
                    </button>
                </>
            )}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />

            <h1 className="turn-highlight">Current Turn: {turn ? "O" : "X"}</h1>
            <div className="grid">
                {board.map((value, idx) => (
                    <Card
                        gameEnd={!!winner}
                        onPlay={play}
                        player={value}
                        key={idx}
                        index={idx}
                    />
                ))}
            </div>
        </div>
    );
}

export default Grid;

