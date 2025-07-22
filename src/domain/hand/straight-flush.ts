import { HandAnalysis } from './hand-analysis';
import { iHandStrategy } from './i-hand-strategy';

export class StraightFlush implements iHandStrategy {
    private analysis: HandAnalysis;

    constructor(private cards: number[]) {
        this.analysis = new HandAnalysis(cards);
    }

    isValid(cards: number[]): boolean {
        // TODO: Implement straight flush validation logic
        return false;
    }

    get cardsOrdered(): number[] {
        // TODO: Order by rank, jokers at end
        return [...this.cards];
    }

    get description(): string {
        // TODO: "a ${highCardRankName} high straight flush"
        return "straight flush";
    }

    get score(): number {
        // TODO: 400 + highCardRankNumber
        return 400; // Placeholder
    }

    get name(): string {
        return "straight flush";
    }

    get rank(): number {
        return 3;
    }
}