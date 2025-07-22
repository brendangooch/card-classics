import { Flush } from "../flush";
describe("Flush", () => {
    test("identifies a flush (same suit, not consecutive)", () => {
        const hand = new Flush([2, 6, 10]);
        expect(hand.isValid([2, 6, 10])).toBe(true);
    });
    test("identifies a flush with a joker", () => {
        const hand = new Flush([2, 0, 10]);
        expect(hand.isValid([2, 0, 10])).toBe(true);
    });
    test("does not identify a straight flush as flush", () => {
        const hand = new Flush([6, 7, 8]);
        expect(hand.isValid([6, 7, 8])).toBe(false);
    });
    test("does not identify a straight as flush", () => {
        const hand = new Flush([6, 19, 32]);
        expect(hand.isValid([6, 19, 32])).toBe(false);
    });
    test("does not identify three of a kind as flush", () => {
        const hand = new Flush([13, 13, 13]);
        expect(hand.isValid([13, 13, 13])).toBe(false);
    });
    test("returns correct description", () => {
        const hand = new Flush([2, 6, 10]);
        expect(hand.description).toMatch(/high flush/i);
    });
    test("returns correct score for 10 high flush", () => {
        const hand = new Flush([2, 6, 10]);
        expect(hand.score).toBe(210); // 200 + 10
    });
    test("returns correct name for flush", () => {
        const hand = new Flush([2, 6, 10]);
        expect(hand.name).toBe("flush");
    });
    test("returns correct rank for flush", () => {
        const hand = new Flush([2, 6, 10]);
        expect(hand.rank).toBe(5);
    });
    test("orders jokers to the right", () => {
        const hand = new Flush([0, 6, 10]);
        expect(hand.cardsOrdered[2]).toBe(0);
    });
});
