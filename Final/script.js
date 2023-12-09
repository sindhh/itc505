document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const size = 5;

    function initializeBoard() {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const square = document.createElement("div");
                square.classList.add("square");
                square.addEventListener("click", () => toggleSquare(i, j));
                board.appendChild(square);
            }
        }
        randomizeBoard();
    }

    function toggleSquare(row, col) {
        const squares = document.querySelectorAll(".square");
        const index = row * size + col;
        squares[index].classList.toggle("is-off");

        toggleAdjacentSquare(row - 1, col);
        toggleAdjacentSquare(row + 1, col);
        toggleAdjacentSquare(row, col - 1);
        toggleAdjacentSquare(row, col + 1);

        if (isGameWon()) {
            window.alert("Congratulations! You have won the game!");
            randomizeBoard();
        }
    }

    function toggleAdjacentSquare(row, col) {
        if (row >= 0 && row < size && col >= 0 && col < size) {
            const squares = document.querySelectorAll(".square");
            const index = row * size + col;
            squares[index].classList.toggle("is-off");
        }
    }

    function isGameWon() {
        const squares = document.querySelectorAll(".square");
        return Array.from(squares).every(square => square.classList.contains("is-off"));
    }

    function randomizeBoard() {
        const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
            if (Math.random() < 0.5) {
                square.classList.add("is-off");
            } else {
                square.classList.remove("is-off");
            }
        });
    }

    initializeBoard();
});
