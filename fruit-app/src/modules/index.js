export default class FruitBasket{
    fruits = [];
 
    addFruit(fruit) {
        this.fruits.push(fruit);
    }

    listFruits() {
        return this.fruits;
    }
    
}
