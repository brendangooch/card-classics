import { HandAnalysis } from './hand-analysis';
import { iHandStrategy } from './i-hand-strategy';

export class Pair implements iHandStrategy {

    private analysis: HandAnalysis;

    constructor(private cards: number[]) {
        this.analysis = new HandAnalysis(cards);
    }

    isValid(cards: number[]): boolean {
        // TODO: Implement pair validation logic
        return false;
    }

    get cardsOrdered(): number[] {
        // TODO: Order with pair first, then kicker, jokers at end
        return [...this.cards];
    }

    get description(): string {
        // TODO: Use pair rank for description
        return `a pair of ${/* pairRankNamePlural */0}`;
    }

    get score(): number {
        // TODO: 100 + pairRankNumber
        return 100; // Placeholder
    }

    get name(): string {
        return "pair";
    }

    get rank(): number {
        return 6;
    }
}