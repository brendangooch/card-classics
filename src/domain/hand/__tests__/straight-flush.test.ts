import { StraightFlush } from "../straight-flush";

describe("StraightFlush", () => {
    test("identifies a 6-7-8 straight flush (same suit)", () => {
        const hand = new StraightFlush([6, 7, 8]);
        expect(hand.isValid([6, 7, 8])).toBe(true);
    });

    test("identifies a straight flush with a joker", () => {
        const hand = new StraightFlush([6, 0, 8]);
        expect(hand.isValid([6, 0, 8])).toBe(true);
    });

    test("does not identify a straight (mixed suits) as straight flush", () => {
        const hand = new StraightFlush([6, 19, 32]);
        expect(hand.isValid([6, 19, 32])).toBe(false);
    });

    test("does not identify a flush (non-consecutive) as straight flush", () => {
        const hand = new StraightFlush([2, 6, 10]);
        expect(hand.isValid([2, 6, 10])).toBe(false);
    });

    test("returns correct description", () => {
        const hand = new StraightFlush([6, 7, 8]);
        expect(hand.description).toMatch(/high straight flush/i);
    });

    test("returns correct score for 8 high straight flush", () => {
        const hand = new StraightFlush([6, 7, 8]);
        expect(hand.score).toBe(408); // 400 + 8
    });

    test("returns correct name for straight flush", () => {
        const hand = new StraightFlush([6, 7, 8]);
        expect(hand.name).toBe("straight flush");
    });

    test("returns correct rank for straight flush", () => {
        const hand = new StraightFlush([6, 7, 8]);
        expect(hand.rank).toBe(3);
    });

    test("orders jokers to the right", () => {
        const hand = new StraightFlush([0, 7, 8]);
        expect(hand.cardsOrdered[2]).toBe(0);
    });
});