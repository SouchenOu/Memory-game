
//firstCard: This variable stores the first card that the player clicks.
let firstCard = null;
//secondCard: This variable stores the second card that the player clicks.
let secondCard = null;
//lockBoard: A boolean variable that indicates whether the board is locked. This prevents further interactions until the current pair of cards is processed.
let lockBoard = false;
let matchedCards = 0;
let score = 0;


//An array containing pairs of images URLs for the game.
const images = [
    "images/image5.png","images/image5.png",
    "images/image13.jpg","images/image13.jpg", 
    "images/image3.jpg","images/image3.jpg",
    "images/image8.jpg", "images/image8.jpg",
    "images/image16.jpg", "images/image16.jpg",
    "images/image11.jpg", "images/image11.jpg"
];
const sortedImages = images.sort(() => (Math.random() > 0.5) ? 1 : -1);
////gameBoard: A reference to the game board element in the HTML where the cards will be appended.
const gameBoard = document.querySelector('.game-board');


// Iterates over each images to create a card.
sortedImages.forEach(image => {
    //Creates a new div element for each card.
    const box = document.createElement('div');
    //Assigns the class item to each card.
    box.className = 'item';
    // Sets the inner HTML of the card to include an img element with the image URL.
    box.innerHTML = `<img src="${image}" alt="memory image">`;
    //Adds a click event listener to each card.
    box.addEventListener('click', function() {
    //Prevents action if the board is locked or if the same card is clicked twice.
    //lockBoard: A boolean variable indicating whether the game board is currently "locked" to prevent further clicks while processing.
    //this === firstCard: Checks if the clicked card is the same as the first card selected. If either condition is true, the function returns immediately, preventing further actions.
    if (lockBoard || this === firstCard || this.classList.contains('boxMatch')) 
        return;

    //Adds the boxOpen class to the clicked card
    this.classList.add('boxOpen');

    //If no card has been selected (firstCard is null), the clicked card is set as firstCard.
    if (!firstCard) {
        firstCard = this;
        return;
    }
    /**If a card has already been selected (firstCard is not null), the clicked card is set as secondCard and the board is locked (lockBoard is set to true). */
    secondCard = this;
    lockBoard = true;
    //Calls the checkForMatch function to see if the two selected cards match.
    CheckIfItMatch();
    });
    
    gameBoard.appendChild(box);
});

function CheckIfItMatch() {
    const isMatch = firstCard.innerHTML === secondCard.innerHTML;

    if (isMatch) {
        disableCards();
        matchedCards += 2;
        score++;
        if (matchedCards === images.length) {
            setTimeout(() => alert(`You win! and your score is ${score}`), 500);
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('boxOpen');
            secondCard.classList.remove('boxOpen');
            resetBoard();
        }, 1000);
    }
}

function disableCards() {
    firstCard.classList.add('boxMatch');
    secondCard.classList.add('boxMatch');
 
    resetBoard();
}



function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

