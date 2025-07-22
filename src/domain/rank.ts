export class Rank {
    private cardType: number;

    constructor(cardType: number) {
        this.cardType = cardType;
    }

    get number(): number {
        if (this.cardType === 0) return 0; // joker
        return ((this.cardType - 1) % 13) + 1; // 1-13 (ace through king)
    }

    get name(): string {
        if (this.cardType === 0) return "joker";

        const rankNames = [
            "", "ace", "two", "three", "four", "five", "six", "seven",
            "eight", "nine", "ten", "jack", "queen", "king"
        ];

        return rankNames[this.number];
    }

    get namePlural(): string {
        if (this.cardType === 0) return "jokers";

        if (this.name === "six") {
            return "sixes";
        }

        return this.name + "s";
    }

    get nameWithArticle(): string {
        if (this.cardType === 0) return "a joker";

        const vowelStart = ["ace", "eight"].includes(this.name);
        const article = vowelStart ? "an" : "a";

        return `${article} ${this.name}`;
    }
}