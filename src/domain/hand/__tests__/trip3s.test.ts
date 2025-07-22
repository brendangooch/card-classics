import { Trip3s } from "../trip3s";

describe("Trip3s", () => {
    test("identifies trip3s with three 3s", () => {
        const hand = new Trip3s([3, 16, 29]);
        expect(hand.isValid([3, 16, 29])).toBe(true);
    });

    test("identifies trip3s with two 3s and a joker", () => {
        const hand = new Trip3s([3, 0, 29]);
        expect(hand.isValid([3, 0, 29])).toBe(true);
    });

    test("identifies trip3s with one 3 and two jokers", () => {
        const hand = new Trip3s([0, 0, 3]);
        expect(hand.isValid([0, 0, 3])).toBe(true);
    });

    test("identifies trip3s with three jokers", () => {
        const hand = new Trip3s([0, 0, 0]);
        expect(hand.isValid([0, 0, 0])).toBe(true);
    });

    test("does not identify three of a kind (not 3s) as trip3s", () => {
        const hand = new Trip3s([13, 26, 39]);
        expect(hand.isValid([13, 26, 39])).toBe(false);
    });

    test("returns correct description", () => {
        const hand = new Trip3s([3, 16, 29]);
        expect(hand.description).toBe("trip 3s");
    });

    test("returns correct score for trip3s", () => {
        const hand = new Trip3s([3, 16, 29]);
        expect(hand.score).toBe(600);
    });

    test("returns correct name for trip3s", () => {
        const hand = new Trip3s([3, 16, 29]);
        expect(hand.name).toBe("trip 3s");
    });

    test("returns correct rank for trip3s", () => {
        const hand = new Trip3s([3, 16, 29]);
        expect(hand.rank).toBe(1);
    });

    test("orders jokers to the right", () => {
        const hand = new Trip3s([0, 3, 16]);
        expect(hand.cardsOrdered[2]).toBe(0);
    });

    test("orders rank 3 cards by suit index", () => {
        // Assuming suit index order: club (1), heart (2), spade (3), diamond (4)
        const hand = new Trip3s([16, 3, 29]);
        expect(hand.cardsOrdered).toEqual([3, 16, 29]);
    });
});