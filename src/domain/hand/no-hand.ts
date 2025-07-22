import { iHandStrategy } from './i-hand-strategy';

export class NoHand implements iHandStrategy {

    constructor(private cards: number[] = []) { }

    isValid(cards: number[]): boolean {
        // Always false for NoHand
        return false;
    }

    get cardsOrdered(): number[] {
        // Return cards as-is or empty array
        return [...this.cards];
    }

    get description(): string {
        return "no hand";
    }

    get score(): number {
        return 0;
    }

    get name(): string {
        return "no hand";
    }

    get rank(): number {
        return 7; // Lowest rank
    }
}