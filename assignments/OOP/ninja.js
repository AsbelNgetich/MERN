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




const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
