const readlineSync = require('readline-sync')

class Character {
    constructor(name, totalCoins, status, hasStar = false, gameActive = true) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }

    setName(namePicked) {
        let players = ['Mario', 'Luigi']
        namePicked = readlineSync.keyInSelect(players, "Pick Player: ")
        if (namePicked === '1') {
            this.name = "Mario"
        }

        if (namePicked === '2') {
            this.name = "Luigi"
        }
    }

    addCoin() {
        this.totalCoins + 1
    }

    gotHit() {
        if (this.status = 'Powered Up') {
            this.status = 'Big'
        } else if (this.status = 'Big') {
            this.status = 'Small'
        } else if (this.status = 'Small') {
            this.status = 'Dead'
        } else if (this.status = 'Dead') {
            gameActive = false
        }
    }

    gotPowerUp() {
        if (this.status = 'Small') {
            this.status = 'Big'
        } else if (this.status = 'Big') {
            this.status = 'Powered Up'
        }
    }



    print() {
        console.log(`Name: ${this.name}`)
        console.log(`Coins: ${this.totalCoins}`)
        console.log(`Status: ${this.status}`)
        console.log(`Stars: ${this.hasStar}`)
    }

}

function randomRange(min, max) {
    return Math.random() * (2 - 0) + 0;
}

if (randomRange = 0) {
    gotHit()
} else if (randomRange = 1) {
    gotPowerUp()
} else if (randomRange = 2) {
    addCoin()
}

setInterval(() => {
    randomRange()
}, 5000);
