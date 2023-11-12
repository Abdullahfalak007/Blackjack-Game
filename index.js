let firstCard = 7
let secondCard = 6
let cards = [firstCard, secondCard] 
let sum = firstCard + secondCard
let isAlive = true
let blackJack = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    // cardsEl.innerHTML = "Cards: " + cards[0] + " " + cards[1]
    
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
    messageEl.textContent = "Drawing a new card from the deck!"
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 7
    // 2. Add the new card to the sum variable
    sum += card
    //pusing the last card into the array
    cards.push(card)

    // 3. Call startGame()
    renderGame()
}