import { HandAnalysis } from './hand-analysis';
import { iHandStrategy } from './i-hand-strategy';

export class Straight implements iHandStrategy {
    private analysis: HandAnalysis;

    constructor(private cards: number[]) {
        this.analysis = new HandAnalysis(cards);
    }

    isValid(cards: number[]): boolean {
        // TODO: Implement straight validation logic
        return false;
    }

    get cardsOrdered(): number[] {
        // TODO: Order by rank, jokers at end
        return [...this.cards];
    }

    get description(): string {
        // TODO: Use highest card rank for description
        return `a ${/* highCardRankName */ 0} high straight`;
    }

    get score(): number {
        // TODO: 300 + highCardRankNumber
        return 300; // Placeholder
    }

    get name(): string {
        return "straight";
    }

    get rank(): number {
        return 4;
    }
}