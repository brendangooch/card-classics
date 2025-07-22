import { HandAnalysis } from './hand-analysis';
export class Pair {
    constructor(cards) {
        this.cards = cards;
        this.analysis = new HandAnalysis(cards);
    }
    isValid(cards) {
        // TODO: Implement pair validation logic
        return false;
    }
    get cardsOrdered() {
        // TODO: Order with pair first, then kicker, jokers at end
        return [...this.cards];
    }
    get description() {
        // TODO: Use pair rank for description
        return `a pair of ${ /* pairRankNamePlural */0}`;
    }
    get score() {
        // TODO: 100 + pairRankNumber
        return 100; // Placeholder
    }
    get name() {
        return "pair";
    }
    get rank() {
        return 6;
    }
}
