const gridContainer = document.querySelector(`#container`);

function randomColor() {
    return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}

for (i = 0; i < 256; i++) {
    let grid = document.createElement('div');
    grid.className = "grid-square";
    grid.style.filter = `brightness(1.0)`;

    grid.addEventListener(`mouseover`, function (e) {
        grid.style.backgroundColor = randomColor();
        e.stopImmediatePropagation();
    }, {
        once: true,
    });




    grid.addEventListener(`mouseover`, () => {
        let gridBrightnessInitial = window.getComputedStyle(grid).getPropertyValue(`filter`);
        let gridBrightnessString = gridBrightnessInitial.slice(11, 14);
        let gridBrightnessNum = parseFloat(gridBrightnessString)
        
        if (gridBrightnessInitial === `brightness(1)`) {
            grid.style.filter = `brightness(0.9)`;
        }
        else if (gridBrightnessNum > 0 && gridBrightnessNum < 1) {
            let gridBrightnessNew = gridBrightnessNum - 0.1;
            grid.style.filter = `brightness(${gridBrightnessNew})`;
        }
    });


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
    gridContainer.style.setProperty(`grid-template-columns`, `repeat(${userGridSize}, 1fr)`);


    for (i = 0; i < (userGridSize * userGridSize); i++) {
        let grid = document.createElement('div');
        grid.className = "grid-square";


        grid.addEventListener(`mouseover`, function (e) {
            grid.style.backgroundColor = randomColor();
            
            e.stopImmediatePropagation();
        }, {
            once: true,
        });
    
    
    
    
        grid.addEventListener(`mouseover`, () => {
            let gridBrightnessInitial = window.getComputedStyle(grid).getPropertyValue(`filter`);
            let gridBrightnessString = gridBrightnessInitial.slice(11, 14);
            let gridBrightnessNum = parseFloat(gridBrightnessString)
            
            if (gridBrightnessInitial === `brightness(1)`) {
                grid.style.filter = `brightness(0.9)`;
            }
            else if (gridBrightnessNum > 0 && gridBrightnessNum < 1) {
                let gridBrightnessNew = gridBrightnessNum - 0.1;
                grid.style.filter = `brightness(${gridBrightnessNew})`;
            }
        });
        
        gridContainer.appendChild(grid);

    };
})


