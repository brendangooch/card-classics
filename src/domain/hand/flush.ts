import { HandAnalysis } from './hand-analysis';
import { iHandStrategy } from './i-hand-strategy';

export class Flush implements iHandStrategy {
    private analysis: HandAnalysis;

    constructor(private cards: number[]) {
        this.analysis = new HandAnalysis(cards);
    }

    isValid(cards: number[]): boolean {
        // TODO: Implement flush validation logic
        return false;
    }

    get cardsOrdered(): number[] {
        // TODO: Order by rank, jokers at end
        return [...this.cards];
    }

    get description(): string {
        // TODO: Use highest card rank for description
        return `a ${/* highCardRankName */0} high flush`;
    }

    get score(): number {
        // TODO: 200 + highCardRankNumber
        return 200; // Placeholder
    }

    get name(): string {
        return "flush";
    }

    get rank(): number {
        return 5;
    }
}