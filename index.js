
let cards = [] 
let sum = 0
let isAlive = false
let blackJack = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//player object
let player = {
    name: "Abdullah Falak",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true

    // Generate two random numbers
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    // Re-assign the cards and sum variables so that the game can start
    cards.push(firstCard)
    cards.push(secondCard)

    //To sum the values
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i]
    }

    renderGame()
}

//function to generate the random number
function getRandomCard() {
    let randomNumber = Math.floor((Math.random() * 13) + 1)
    
    //Logic to change the values as below:
    // if 1     -> return 11
    // if 11-13 -> return 10
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    
    cardsEl.innerHTML = "Cards: "
    //Loop to concatenate the cards into the array.
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i] + " ";
        
    }

    //Logic of the game
    if (sum <= 20)
    {
        message = "Do you want to draw another card?"
    }
    else if (sum === 21)
    {
        message = "You got a blackjack!"
        blackJack = true
    }
    else
    {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && blackJack === false) {
        messageEl.textContent = "Drawing a new card from the deck!"
        // 1. Create a card variable, and hard code its value to a number (2-11)
        let card = getRandomCard()
        // 2. Add the new card to the sum variable
        sum += card
        //pusing the last card into the array
        cards.push(card)

        // 3. Call startGame()
        renderGame()
    }
}