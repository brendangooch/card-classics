import { Straight } from "../straight";
describe("Straight", () => {
    test("identifies a 6-7-8 straight", () => {
        const hand = new Straight([6, 7, 8]);
        expect(hand.isValid([6, 7, 8])).toBe(true);
    });
    test("identifies a straight with a joker", () => {
        const hand = new Straight([6, 0, 8]);
        expect(hand.isValid([6, 0, 8])).toBe(true);
    });
    test("does not identify a flush as straight", () => {
        const hand = new Straight([2, 6, 10]);
        expect(hand.isValid([2, 6, 10])).toBe(false);
    });
    test("does not identify three of a kind as straight", () => {
        const hand = new Straight([13, 13, 13]);
        expect(hand.isValid([13, 13, 13])).toBe(false);
    });
    test("returns correct description", () => {
        const hand = new Straight([6, 7, 8]);
        expect(hand.description).toMatch(/high straight/i);
    });
    test("returns correct score for 8 high straight", () => {
        const hand = new Straight([6, 7, 8]);
        expect(hand.score).toBe(308); // 300 + 8
    });
    test("returns correct name for straight", () => {
        const hand = new Straight([6, 7, 8]);
        expect(hand.name).toBe("straight");
    });
    test("returns correct rank for straight", () => {
        const hand = new Straight([6, 7, 8]);
        expect(hand.rank).toBe(4);
    });
    test("orders jokers to the right", () => {
        const hand = new Straight([0, 7, 8]);
        expect(hand.cardsOrdered[2]).toBe(0);
    });
});
