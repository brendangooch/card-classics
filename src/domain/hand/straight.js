import { HandAnalysis } from './hand-analysis';
export class Straight {
    constructor(cards) {
        this.cards = cards;
        this.analysis = new HandAnalysis(cards);
    }
    isValid(cards) {
        // TODO: Implement straight validation logic
        return false;
    }
    get cardsOrdered() {
        // TODO: Order by rank, jokers at end
        return [...this.cards];
    }
    get description() {
        // TODO: Use highest card rank for description
        return `a ${ /* highCardRankName */0} high straight`;
    }
    get score() {
        // TODO: 300 + highCardRankNumber
        return 300; // Placeholder
    }
    get name() {
        return "straight";
    }
    get rank() {
        return 4;
    }
}
