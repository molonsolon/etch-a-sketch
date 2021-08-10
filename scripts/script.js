const gridContainer = document.querySelector(`#container`);


for (i = 0; i <= 256; i++) {
    let grid = document.createElement('div');
    grid.className = "grid-square";
    
    grid.addEventListener(`mouseover`, () => {
        grid.style.backgroundColor = `black`;
    });
    gridContainer.appendChild(grid);
    
};

const gridSquare = document.querySelectorAll(`.grid-square`);




