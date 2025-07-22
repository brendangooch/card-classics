export class Deck {
    private cards: number[] = [];
    private jokerCount: number;

    constructor(jokerCount: number = 0) {
        this.jokerCount = jokerCount;
        this.init();
    }

    init(): void {
        this.cards = [];

        // Add cards 1-52
        for (let i = 1; i <= 52; i++) {
            this.cards.push(i);
        }

        // Add jokers (0)
        for (let j = 0; j < this.jokerCount; j++) {
            this.cards.push(0);
        }

        // Shuffle the deck
        this.shuffle();
    }

    deal(): number {
        if (this.cards.length === 0) {
            this.init(); // Auto-reshuffle when empty
        }

        return this.cards.shift()!;
    }

    private shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}