class Character{
    constructor(name,totalCoins, status){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
    }
}

const Luigi = new Character("Luigi", 100, "Small")
console.log(Luigi.totalCoins)
