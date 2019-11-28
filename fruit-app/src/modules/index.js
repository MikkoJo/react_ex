class FruitBasket {
    constructor() {
        super();
    }
    fruits = [];
    addFruit(fruit) {
        this.fruits.push(fruit);
    }

    listFruits() {
        return this.fruits;
    }
    
}