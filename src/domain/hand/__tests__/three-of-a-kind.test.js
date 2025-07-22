import { ThreeOfAKind } from "../three-of-a-kind";
describe("ThreeOfAKind", () => {
    test("identifies three kings", () => {
        const hand = new ThreeOfAKind([13, 26, 39]);
        expect(hand.isValid([13, 26, 39])).toBe(true);
    });
    test("identifies three aces", () => {
        const hand = new ThreeOfAKind([1, 14, 27]);
        expect(hand.isValid([1, 14, 27])).toBe(true);
    });
    test("identifies three of a kind with jokers", () => {
        const hand = new ThreeOfAKind([0, 13, 26]);
        expect(hand.isValid([0, 13, 26])).toBe(true);
    });
    test("does not identify trip 3s as three of a kind", () => {
        const hand = new ThreeOfAKind([3, 16, 29]);
        expect(hand.isValid([3, 16, 29])).toBe(false);
    });
    test("does not identify a pair as three of a kind", () => {
        const hand = new ThreeOfAKind([13, 13, 39]);
        expect(hand.isValid([13, 13, 39])).toBe(false);
    });
    test("returns correct description", () => {
        const hand = new ThreeOfAKind([13, 26, 39]);
        expect(hand.description).toMatch(/three of a kind/i);
        expect(hand.description).toMatch(/kings/i);
    });
    test("returns correct score for three kings", () => {
        const hand = new ThreeOfAKind([13, 26, 39]);
        expect(hand.score).toBe(513); // 500 + 13
    });
    test("returns correct name for three of a kind", () => {
        const hand = new ThreeOfAKind([13, 26, 39]);
        expect(hand.name).toBe("three of a kind");
    });
    test("returns correct rank for three of a kind", () => {
        const hand = new ThreeOfAKind([13, 26, 39]);
        expect(hand.rank).toBe(2);
    });
    test("orders jokers to the right", () => {
        const hand = new ThreeOfAKind([0, 13, 26]);
        expect(hand.cardsOrdered[2]).toBe(0);
    });
});
