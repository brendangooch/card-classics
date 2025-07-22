import { NoHand } from "../no-hand";
describe("NoHand", () => {
    test("always returns isValid as false", () => {
        const hand = new NoHand([2, 5, 9]);
        expect(hand.isValid([2, 5, 9])).toBe(false);
    });
    test("returns correct description", () => {
        const hand = new NoHand([2, 5, 9]);
        expect(hand.description).toBe("no hand");
    });
    test("returns correct score for no hand", () => {
        const hand = new NoHand([2, 5, 9]);
        expect(hand.score).toBe(0);
    });
    test("returns correct name for no hand", () => {
        const hand = new NoHand([2, 5, 9]);
        expect(hand.name).toBe("no hand");
    });
    test("returns correct rank for no hand", () => {
        const hand = new NoHand([2, 5, 9]);
        expect(hand.rank).toBe(7);
    });
    test("returns cards as-is", () => {
        const hand = new NoHand([2, 5, 9]);
        expect(hand.cardsOrdered).toEqual([2, 5, 9]);
    });
});
