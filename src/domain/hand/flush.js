import { HandAnalysis } from './hand-analysis';
export class Flush {
    constructor(cards) {
        this.cards = cards;
        this.analysis = new HandAnalysis(cards);
    }
    isValid(cards) {
        // TODO: Implement flush validation logic
        return false;
    }
    get cardsOrdered() {
        // TODO: Order by rank, jokers at end
        return [...this.cards];
    }
    get description() {
        // TODO: Use highest card rank for description
        return `a ${ /* highCardRankName */0} high flush`;
    }
    get score() {
        // TODO: 200 + highCardRankNumber
        return 200; // Placeholder
    }
    get name() {
        return "flush";
    }
    get rank() {
        return 5;
    }
}
