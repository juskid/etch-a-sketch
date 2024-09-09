function hoverState(e) {
    console.log("hover");
    this.style.background = "red"
}

function newGrid(dimension) {
    let container = document.querySelector("#gridDiv");
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    const hovDiv = document.querySelectorAll("#hovDiv");
    hovDiv.forEach((div) => div.addEventListener('mouseover', hoverState));

    for (let i = 0; i < dimension; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < dimension; j++) {
            let square = document.createElement("div");
            square.classList.add("hovDiv");
            square.addEventListener('mouseover', hoverState);
            row.appendChild(square);
        }
        container.appendChild(row);
    }

}

function input() {
    let dimension = prompt("Please, enter dimensions of grid", "Number");
    newGrid(dimension);
}

function reset(e) {
    location.reload();
}

newGrid(16);