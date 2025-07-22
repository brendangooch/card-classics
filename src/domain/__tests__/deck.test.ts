import { Deck } from "../deck";

describe('Deck', () => {
    describe('constructor and initialization', () => {
        test('should create deck with no jokers by default', () => {
            const deck = new Deck();

            // Deal all cards and count them
            const dealtCards = [];
            for (let i = 0; i < 52; i++) {
                dealtCards.push(deck.deal());
            }

            expect(dealtCards).toHaveLength(52);
            expect(dealtCards.filter(card => card === 0)).toHaveLength(0); // no jokers
            expect(dealtCards.filter(card => card >= 1 && card <= 52)).toHaveLength(52);
        });

        test('should create deck with specified number of jokers', () => {
            const deck = new Deck(2);

            // Deal all cards and count them
            const dealtCards = [];
            for (let i = 0; i < 54; i++) { // 52 + 2 jokers
                dealtCards.push(deck.deal());
            }

            expect(dealtCards).toHaveLength(54);
            expect(dealtCards.filter(card => card === 0)).toHaveLength(2); // 2 jokers
            expect(dealtCards.filter(card => card >= 1 && card <= 52)).toHaveLength(52);
        });
    });

    describe('dealing cards', () => {
        test('should deal unique cards from a standard deck', () => {
            const deck = new Deck();
            const dealtCards = [];

            for (let i = 0; i < 52; i++) {
                dealtCards.push(deck.deal());
            }

            // Should have all cards 1-52, each exactly once
            const sortedCards = [...dealtCards].sort((a, b) => a - b);
            const expectedCards = Array.from({ length: 52 }, (_, i) => i + 1);

            expect(sortedCards).toEqual(expectedCards);
        });

        test('should auto-reshuffle when deck is empty', () => {
            const deck = new Deck();

            // Deal 52 cards (empty the deck)
            for (let i = 0; i < 52; i++) {
                deck.deal();
            }

            // Next deal should auto-reshuffle and continue dealing
            const nextCard = deck.deal();
            expect(nextCard).toBeGreaterThanOrEqual(1);
            expect(nextCard).toBeLessThanOrEqual(52);

            // Should be able to deal many more cards
            for (let i = 0; i < 100; i++) {
                const card = deck.deal();
                expect(card).toBeGreaterThanOrEqual(1);
                expect(card).toBeLessThanOrEqual(52);
            }
        });

        test('should handle jokers correctly in auto-reshuffle', () => {
            const deck = new Deck(1);

            // Deal 53 cards (empty the deck)
            for (let i = 0; i < 53; i++) {
                deck.deal();
            }

            // Next deal should auto-reshuffle with joker included
            const nextCards = [];
            for (let i = 0; i < 53; i++) {
                nextCards.push(deck.deal());
            }

            expect(nextCards.filter(card => card === 0)).toHaveLength(1); // 1 joker
            expect(nextCards.filter(card => card >= 1 && card <= 52)).toHaveLength(52);
        });
    });

    describe('shuffling behavior', () => {
        test('should produce different orders when reshuffled', () => {
            const deck1 = new Deck();
            const deck2 = new Deck();

            const order1 = [];
            const order2 = [];

            for (let i = 0; i < 10; i++) { // Just check first 10 cards
                order1.push(deck1.deal());
                order2.push(deck2.deal());
            }

            // Very unlikely to get same order (but not impossible due to randomness)
            // This test might occasionally fail due to random chance
            expect(order1).not.toEqual(order2);
        });
    });

    describe('init method', () => {
        test('should reset and reshuffle the deck', () => {
            const deck = new Deck(1);

            // Deal some cards
            deck.deal();
            deck.deal();

            // Reset the deck
            deck.init();

            // Should have full deck again
            const dealtCards = [];
            for (let i = 0; i < 53; i++) {
                dealtCards.push(deck.deal());
            }

            expect(dealtCards).toHaveLength(53);
            expect(dealtCards.filter(card => card === 0)).toHaveLength(1);
            expect(dealtCards.filter(card => card >= 1 && card <= 52)).toHaveLength(52);
        });
    });
});