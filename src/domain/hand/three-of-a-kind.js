import { HandAnalysis } from './hand-analysis';
export class ThreeOfAKind {
    constructor(cards) {
        this.cards = cards;
        this.analysis = new HandAnalysis(cards);
    }
    isValid(cards) {
        // TODO: Use this.analysis for validation logic
        return false;
    }
    get cardsOrdered() {
        // TODO: Use this.analysis for ordering
        return this.analysis.cardsOrdered;
    }
    get description() {
        // TODO: Generate description using this.analysis
        return "three of a kind";
    }
    get score() {
        // TODO: Calculate score using this.analysis
        return 500; // Placeholder
    }
    get name() {
        return "three of a kind";
    }
    get rank() {
        return 2;
    }
}
