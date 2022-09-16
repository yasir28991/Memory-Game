const cardsArray = [
    {
        name: 'fries' ,
        img: '/images/fries.png'
    },
    {
        name: 'cheezeburger' ,
        img: '/images/cheeseburger.png'
    }, 
    {
        name: 'hotdog' ,
        img: '/images/hotdog.png'
    },
    {
        name: 'ice-cream' ,
        img: '/images/ice-cream.png'
    },
    {
        name: 'milkshake' ,
        img: '/images/milkshake.png'
    },
    {
        name: 'pizza' ,
        img: '/images/pizza.png'
    } ,
    {
        name: 'fries' ,
        img: '/images/fries.png'
    },
    {
        name: 'cheezeburger' ,
        img: '/images/cheeseburger.png'
    }, 
    {
        name: 'hotdog' ,
        img: '/images/hotdog.png'
    },
    {
        name: 'ice-cream' ,
        img: '/images/ice-cream.png'
    },
    {
        name: 'milkshake' ,
        img: '/images/milkshake.png'
    },
    {
        name: 'pizza' ,
        img: '/images/pizza.png'
    }
]

// variables
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.getElementById('score')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

cardsArray.sort(() => 0.5 - Math.random())

function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src' , '/images/blank.png')
        card.setAttribute('data-id' , i)
        card.addEventListener('click' , flipCard)
        gridDisplay.appendChild(card)
        // console.log(i , card)
    }
}
 
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    resultDisplay.textContent = cardsWon.length
    if (optionOneId == optionTwoId) {
        alert('You clicked the same card again!')
        cards[optionOneId].setAttribute('src','/images/blank.png')
        cards[optionTwoId].setAttribute('src' ,'/images/blank.png')
    }
    
    else if (cardsChosen[0] == cardsChosen[1]) {
        alert("You've found a match!")
        cards[optionOneId].setAttribute('src',
         'images/white.png');
        cards[optionTwoId].setAttribute('src' ,
        'images/white.png');
        cards[optionOneId].removeEventListener('click',
        flipCard)
        cards[optionTwoId].removeEventListener('click',
        flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src',
         'images/blank.png');
         cards[optionTwoId].setAttribute('src' ,
        'images/blank.png');
        alert('Sorry try again')
    }
    cardsChosen = []
    cardsChosenIds = []
    
    if (cardsWon.length == cardsArray.length/2) {
        resultDisplay.textContent = "You've won!!!"
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardsArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src' ,cardsArray[cardId].img)
    
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch , 500)
    }
}
