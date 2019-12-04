export default class FruitBasket{
    fruits = [];
 
    addFruit(fruit) {
        this.fruits.push(fruit);
    }

    listFruits() {
        return this.fruits;
    }

    searchFruits(text) {
        let results  = [];
        this.fruits.forEach( f => { if(f.includes(text)) {results.push(f);}
            
        });
        return results;
    }

    
    
}
