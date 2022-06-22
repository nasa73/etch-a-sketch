// display default grid
const container = document.querySelector('.container');
createGrid(16);
listen();


// press newGrid button
const newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', function () {
    deleteGrid();
    let gridSize = prompt('Enter number of squares per side!');
    if (gridSize > 100) gridSize = prompt('You cannot enter a number bigger than 100!');
    createGrid(gridSize);
    listen();
})

// press reset button
const reset = document.querySelector('#reset');
reset.addEventListener('click', function () {
   const gridItems = document.querySelectorAll('.grid');
   gridItems.forEach(grid => grid.classList.remove('bg-black'));
})

function listen () {
    const gridItems = document.querySelectorAll('.grid');
    gridItems.forEach(grid => grid.addEventListener('click', draw));
    gridItems.forEach(grid => grid.addEventListener('mouseenter', drawhover));

}

function draw(e) {
    e.target.classList.add('bg-black');
}

function drawhover(e) {
    if(e.buttons > 0) {
        e.target.classList.add('bg-black');
    }
}

function createGrid(pixel) {
    for (let i = 0; i < pixel ** 2; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.style.width = `${(640 / pixel) - 1}px`;
        div.style.height = `${(640 / pixel) - 1}px`;
        div.classList.add('grid');
        div.setAttribute('draggable', 'false');
    }
}

function deleteGrid() {
    const divs = document.querySelectorAll('.grid');
    divs.forEach(div => div.remove());
}
