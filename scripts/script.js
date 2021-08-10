const gridContainer = document.querySelector(`#container`);

function randomColor() {
    return `hsl(${Math.floor(Math.random() *360)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)})`
}

for (i = 0; i < 256; i++) {
    let grid = document.createElement('div');
    grid.className = "grid-square";
    
    grid.addEventListener(`mouseover`, once() => {
        grid.style.backgroundColor = `black`;
    });
    grid.addEventListener(`mouseover`, () => {
        if (grid.style.backgroundColor != `white`) {
            grid.style.backgroundColor = randomColor();
        }
    })
    gridContainer.appendChild(grid);
    
};


const gridSquare = document.querySelectorAll(`.grid-square`);

const resetButton = document.querySelector(`#reset-button`);
const body = document.querySelector(`body`);

function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
}

resetButton.addEventListener(`click`, () => {
    removeAllChildNodes(gridContainer);
    const userGridSize = prompt(`How many squares per side? Limit: 100`, ``);
    if (userGridSize > 100) {
        return alert(`Please enter a number less than or equal to 100.`)
    }
    gridContainer.style.removeProperty(`grid-template-columns`);
    gridContainer.style.setProperty(`grid-template-columns`,`repeat(${userGridSize}, 1fr)`);
    

    for (i = 0; i < (userGridSize * userGridSize); i++) {
        let grid = document.createElement('div');
        grid.className = "grid-square";
        

        grid.addEventListener(`mouseover`, () => {
            grid.style.backgroundColor = `black`;
        });
        gridContainer.appendChild(grid);
        
    };
})


