# Avito-challenge


The code iterates over each image in the sorted images array, creating a card for each image.
Each card is a div element containing an img element.
A click event listener is added to each card to handle the game's logic:
Prevents action if the board is locked or if the same card is clicked twice.
Flips the card by adding the boxOpen class.
Manages the selection of the first and second cards.
Calls the CheckIfItMatch() function to check if the two selected cards match.
