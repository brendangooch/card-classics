import { HandAnalysis } from './hand-analysis';
export class StraightFlush {
    constructor(cards) {
        this.cards = cards;
        this.analysis = new HandAnalysis(cards);
    }
    isValid(cards) {
        // TODO: Implement straight flush validation logic
        return false;
    }
    get cardsOrdered() {
        // TODO: Order by rank, jokers at end
        return [...this.cards];
    }
    get description() {
        // TODO: "a ${highCardRankName} high straight flush"
        return "straight flush";
    }
    get score() {
        // TODO: 400 + highCardRankNumber
        return 400; // Placeholder
    }
    get name() {
        return "straight flush";
    }
    get rank() {
        return 3;
    }
}
