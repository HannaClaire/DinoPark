const Dinosaur = require("./dinosaur")

const Park = function (name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinoCollection = []
}



Park.prototype.numOfDinos = function() {
    return this.dinoCollection.length
}

Park.prototype.addDinos = function() {
    this.dinoCollection.push(dinosaur)
}

Park.prototype.addDino = function() {
    this.dinoCollection.push(dinosaur)
}

Park.prototype.removeDino = function() {
    this.dinoCollection.pop
}

// Park.prototype.attractsMostVisits = function() {
// return this.dinoCollection.guestsAttractedPerDay.max
//     }

// Park.prototype.dinoWithMostVisitors = function() {
//     this.dinosaur.guestsAttractedPerDay
// }

// Park.prototype.attractsMostVisitors = function() {
//     let mostPopDino = null
//     let mostVisitors = 0
//     for (const dinosaur of this.dinoCollection) {
//         if (dinosaur.guestsAttractedPerDay > mostVisitors) {
//             mostPopDino = dinosaur
//             mostVisitors = dinosaur.guestsAttractedPerDay
//         }
//     }
//     return mostPopDino
// }

module.exports = Park;

