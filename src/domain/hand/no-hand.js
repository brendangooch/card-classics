export class NoHand {
    constructor(cards = []) {
        this.cards = cards;
    }
    isValid(cards) {
        // Always false for NoHand
        return false;
    }
    get cardsOrdered() {
        // Return cards as-is or empty array
        return [...this.cards];
    }
    get description() {
        return "no hand";
    }
    get score() {
        return 0;
    }
    get name() {
        return "no hand";
    }
    get rank() {
        return 7; // Lowest rank
    }
}
