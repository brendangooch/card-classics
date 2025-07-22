import { Pair } from "../pair";

describe("Pair", () => {
    test("identifies a pair of kings", () => {
        const hand = new Pair([13, 13, 7]);
        expect(hand.isValid([13, 13, 7])).toBe(true);
    });

    test("identifies a pair with a joker", () => {
        const hand = new Pair([0, 13, 7]);
        expect(hand.isValid([0, 13, 7])).toBe(true);
    });

    test("does not identify three of a kind as pair", () => {
        const hand = new Pair([13, 13, 13]);
        expect(hand.isValid([13, 13, 13])).toBe(false);
    });

    test("does not identify a flush as pair", () => {
        const hand = new Pair([2, 6, 10]);
        expect(hand.isValid([2, 6, 10])).toBe(false);
    });

    test("returns correct description", () => {
        const hand = new Pair([13, 13, 7]);
        expect(hand.description).toMatch(/pair of/i);
        expect(hand.description).toMatch(/kings/i);
    });

    test("returns correct score for pair of kings", () => {
        const hand = new Pair([13, 13, 7]);
        expect(hand.score).toBe(113); // 100 + 13
    });

    test("returns correct name for pair", () => {
        const hand = new Pair([13, 13, 7]);
        expect(hand.name).toBe("pair");
    });

    test("returns correct rank for pair", () => {
        const hand = new Pair([13, 13, 7]);
        expect(hand.rank).toBe(6);
    });

    test("orders jokers to the right", () => {
        const hand = new Pair([0, 13, 7]);
        expect(hand.cardsOrdered[2]).toBe(0);
    });
});