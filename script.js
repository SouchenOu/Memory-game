const images = [
    "images/image2.jpg", "images/image3.jpg",
    "images/image5.png","images/image6.jpg",
    "images/image7.jpg","images/image8.jpg", 
    "images/image9.jpg","images/image10.png",
    "images/image11.jpg", "images/image12.jpg",
    "images/image16.jpg", "images/image17.jpg"
]

const shuffledImages = images.sort(() => (Math.random() > .5) ? 2 : -1);

const gameBoard = document.querySelector('.game-board');

shuffledImages.forEach(image => {
    const box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = `<img src="${image}" alt="memory image">`;
    gameBoard.appendChild(box);
});

