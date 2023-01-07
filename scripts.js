const container = document.querySelector('.container');

for (let i=0; i < (256); i++) {
    let div = document.createElement('div');
    div.style.cssText = 'height: 59px; width: 59px; background-color: white; border: .5px solid black';
    container.appendChild(div);
}

changeBackground();

function changeBackground() {

    let divs = document.querySelectorAll ('.container div');



    divs.forEach(div => {
        div.addEventListener('mouseover', function(event) {
            let randomR = Math.floor(Math.random() * 256);
            let randomG = Math.floor(Math.random() * 256);
            let randomB = Math.floor(Math.random() * 256);
            event.target.style.background = `rgb(${randomR},${randomG},${randomB})`;
        })
    });

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const changeGrid = document.querySelector('.change-size');


function changeSize() {
    let num = prompt('How many squares do you want per row of your grid?', '0 to 100');

    while (num > 100 || num < 0) {
        num = prompt('Please enter a number 0 to 100!');
    }

    removeAllChildNodes(container);

    for (let i=0; i < (num * num); i++) {
        let borders = num * 2;//Total number of borders for divs
        let totalBorderWidth = .5 * borders;//total number of pixels in each row due to borders
        let size = (960 - totalBorderWidth) / num ; //calculated size of divs
        let div = document.createElement('div');
        div.style.cssText = `height: ${size}px; width: ${size}px; background-color: white; border: .5px solid black;`;
        container.appendChild(div);
    } 
    
    changeBackground();
    
}

changeGrid.addEventListener('click', () => {changeSize()});
