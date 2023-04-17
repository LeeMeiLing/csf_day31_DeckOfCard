// const SUIT = ["diamond","clover", "heart", "spade"]
enum Suit{
    Diamond, Clover, Heart, Spade
}

// can use interface if this object is only holding value and nothing else
export class Card{

    suit: string;
    value: number;
    name: string;

    constructor(suit: string,value: number,name: string){
        this.suit = suit
        this.value = value
        this.name = name
    }

}

export class DeckOfCards{

    cards: Card[]=[]; // use union " |null " so we can assign null

    /*
     this.deck = new LinkedList<>();
        for (int i = 0; i < Constants.SUITS.length; i++) {
            String suit = Constants.SUITS[i];
            for (int j = 0; j < Constants.VALUES.length; j++) {
                Integer value = Constants.VALUES[j];
                String name = Constants.NAMES[j];
                Card card = new Card(suit, value, name);
                deck.add(card);
            } 
    */

    constructor(){

        for (let i = 0; i<4; i++ ){

            let suit: string = Suit[i]

            for(let j = 1; j < 14; j++){
                let value: number = j;
                let name: string = suit + value
                let card = new Card(suit,value,name)
                this.cards.push(card)
            }
        }
    }

    shuffle(): void{

        for (let curr:number = 0; curr < this.cards.length; curr++) {
            let toSwap: number = Math.floor(Math.random() * 52);
            let c: Card = this.cards[curr]
            let d: Card = this.cards[toSwap]
            this.cards[curr]=d
            this.cards[toSwap]=c
        }

    }

    // must use | undefined to use pop()
    take():Card | undefined{
        // return this.cards.splice(0,1)[0] // !!! // splice return an array, use [0] to return only one element
        return this.cards.pop()
    }

}