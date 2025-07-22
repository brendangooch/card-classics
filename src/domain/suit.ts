export class Suit {
    private cardType: number;

    constructor(cardType: number) {
        this.cardType = cardType;
    }

    get number(): number {
        if (this.cardType === 0) return 0; // joker
        return Math.floor((this.cardType - 1) / 13) + 1; // 1-4 (clubs, hearts, spades, diamonds)
    }

    get name(): string {
        if (this.cardType === 0) return "joker";

        const suitNames = ["", "club", "heart", "spade", "diamond"];

        return suitNames[this.number];
    }

    get namePlural(): string {
        if (this.cardType === 0) return "jokers";

        return this.name + "s";
    }
}