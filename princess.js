const readlineSync = require('readline-sync')

// Charactrer constructor
class Character {
    constructor(name, totalCoins, status, hasStar, gameActive) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }


    // Pick character
    setName(namePicked) {
        if (namePicked === 'Mario') {
            this.name = "Mario"
        } else if (namePicked === 'Luigi') {
            this.name = "Luigi"
        } else {
            this.name = 'Please pick a name .'
        }
    }
    // Add coin
    addCoin() {
        console.log('Added coin!')
        this.totalCoins += 1
    }
    // If Character gets hit
    gotHit() {
        console.log(`${Mario.name} got hit!`)
        if (this.status === 'Powered Up') {
            this.status = 'Big'
        } else if (this.status === 'Big') {
            this.status = 'Small'
        } else if (this.status === 'Small') {
            this.status = 'Dead'
        } else if (this.status === 'Dead') {
            gameActive = false
        }
    }

    // Why is this undefined?
    gotPowerUp() {
        console.log('Powered Up!')
        if (this.status = 'Small') {
            this.status = 'Big'
        } else if (this.status = 'Big') {
            this.status = 'Powered Up'
        } else if (this.status = 'Powered Up') {
            this.hasStar === true
        }
    }


    // Print stat to the console
    print() {
        console.log(`Name: ${this.name}`)
        console.log(`Coins: ${this.totalCoins}`)
        console.log(`Status: ${this.status}`)
        console.log(`Stars: ${this.hasStar}`)
    }

}
// Character variables
const Mario = new Character('Name', 1, 'Small', false, false)
Mario.setName('Mario')

// Generate random range for got hit, powwer up and add coin

const time = setInterval(() => {
    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return Mario.gotHit()
    } else if (randomNum === 1) {
        return Mario.gotPowerUp()
    } else if (randomNum === 2) {
        return Mario.addCoin()
    }

    if (Mario.gameActive === true || Mario.status === 'Dead') {
        clearInterval(time)
    }

    Mario.print()
}, 1000);
