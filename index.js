let firstCard = 7
let secondCard = 6
let sum = firstCard + secondCard
let isAlive = true
let blackJack = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.innerHTML = "Cards: " + firstCard + " " + secondCard
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
    // 3. Call startGame()
    startGame()
}