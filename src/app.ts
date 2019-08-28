import { getRandomInt } from './random';
let squares: NodeList;

export function runApp() {

    // pick a number
    const secretNumber = getRandomInt(1, 6);
    // find the squares, pick one, and mark it
    squares = document.querySelectorAll('.square');
    let currentSquare = 1;
    squares.forEach(function (square: HTMLDivElement) {
        if (currentSquare === secretNumber) {
            square.dataset.secret = 'true';
        }
        currentSquare++;
        square.addEventListener('click', handleClick);
    });
    // make click event

}

function handleClick() {
    const clickedSquare = this as HTMLDivElement;
    const isSpecial = clickedSquare.dataset.secret === 'true';

    if (isSpecial) {
        clickedSquare.classList.add('winner');

        squares.forEach((sq: HTMLDivElement) => {
            if (sq !== clickedSquare) {
                sq.classList.add('loser');
                sq.removeEventListener('click', handleClick);
            }
        });
    } else {
        clickedSquare.classList.add('loser');
        clickedSquare.removeEventListener('click', handleClick);
    }
}
