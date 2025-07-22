import { iHandStrategy } from './i-hand-strategy';
import { HandAnalysis } from './hand-analysis';

export class Trip3s implements iHandStrategy {
    private analysis: HandAnalysis;

    constructor(private cards: number[]) {
        this.analysis = new HandAnalysis(cards);
    }

    isValid(cards: number[]): boolean {

        // 3 jokers
        if (this.analysis.numJokers === 3) return true;

        // 2 jokers and 1 non-joker

        // 1 joker and 2 non-jokers

        // 3 of the same rank without jokers

        return false;
    }

    get cardsOrdered(): number[] {
        // TODO: Use this.analysis for ordering
        return this.analysis.cardsOrdered;
    }

    get description(): string {
        // TODO: Generate description using this.analysis
        return "three of a kind";
    }

    get score(): number {
        // TODO: Calculate score using this.analysis
        return 500; // Placeholder
    }

    get name(): string {
        return "three of a kind";
    }

    get rank(): number {
        return 2;
    }
}