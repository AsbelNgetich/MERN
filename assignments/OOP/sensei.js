class Ninja {
    constructor(name, health = 10, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        return console.log(this.name);
    }

    showStats() {
        return console.log("Name: " + this.name + " Health: " + this.health + " Speed: " + this.speed + " Strength " + this.strength);
    }

    drinkSake() {
        this.health += 10;
    }
}



class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 210, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
        return console.log("The journey of a thousand miles begins with a single step");
    }

}



// // example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// // -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
