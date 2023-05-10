const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    // const dinosaur1 = new Dinosaur('Tyrannosaurus-Max', 'carnivore', 50);
    // const dinosaur2 = new Dinosaur('Pterodact-Phil', 'carnivore', 60);
    // const dinosaur3 = new Dinosaur('Jenna-Saurus', 'Herbivore', 40);
    // const dinoCollection = [dinosaur1, dinosaur2, dinosaur3]
    park = new Park("Gills, thrills n' Pterodactyl's", 18);
  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, "Gills, thrills n' Pterodactyl's")
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 18)

  });

  it('should have a collection of dinosaurs', function() {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50)
    park.addDinos(dinosaur)
    dinosaur1 = new Dinosaur('Pterodact-Phil', 'carnivore', 60)
    park.addDinos(dinosaur)
    dinosaur2 = new Dinosaur('Jenna-Saurus', 'Herbivore', 40)
    park.addDinos(dinosaur)
    const actual = park.numOfDinos()
    assert.deepStrictEqual(actual, 3)
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino("TrySarah-tops", "carnivore", 45)
    const actual = park.numOfDinos()
    assert.deepStrictEqual(actual, 1)
  });


  it('should be able to remove a dinosaur from its collection', function(){
    // park.addDinos();
    park.removeDino();
    const actual = park.numOfDinos();
    assert.deepStrictEqual(actual, 0)
  })

  // it('should be able to find the dinosaur that attracts the most visitors', function() {
  //   park.addDinos(dinosaur)
  //   park.addDinos(dinosaur1)
  //   park.addDinos(dinosaur2)
  //   const actual = park.dinoWithMostVisitors()
  //   assert.strictEqual(actual, dinosaur1)
  // });


  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
