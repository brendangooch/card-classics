import { Suit } from '../suit';

describe('Suit', () => {
    describe('joker (type 0)', () => {
        const jokerSuit = new Suit(0);

        test('should return 0 for joker number', () => {
            expect(jokerSuit.number).toBe(0);
        });

        test('should return "joker" for joker name', () => {
            expect(jokerSuit.name).toBe("joker");
        });

        test('should return "jokers" for joker plural', () => {
            expect(jokerSuit.namePlural).toBe("jokers");
        });
    });

    describe('regular cards', () => {
        test('should calculate suit numbers correctly', () => {
            expect(new Suit(1).number).toBe(1);   // clubs (1-13)
            expect(new Suit(13).number).toBe(1);  // clubs
            expect(new Suit(14).number).toBe(2);  // hearts (14-26)
            expect(new Suit(26).number).toBe(2);  // hearts
            expect(new Suit(27).number).toBe(3);  // spades (27-39)
            expect(new Suit(39).number).toBe(3);  // spades
            expect(new Suit(40).number).toBe(4);  // diamonds (40-52)
            expect(new Suit(52).number).toBe(4);  // diamonds
        });

        test('should return correct suit names', () => {
            expect(new Suit(1).name).toBe("club");
            expect(new Suit(14).name).toBe("heart");
            expect(new Suit(27).name).toBe("spade");
            expect(new Suit(40).name).toBe("diamond");
        });

        test('should handle plural names correctly', () => {
            expect(new Suit(1).namePlural).toBe("clubs");
            expect(new Suit(14).namePlural).toBe("hearts");
            expect(new Suit(27).namePlural).toBe("spades");
            expect(new Suit(40).namePlural).toBe("diamonds");
        });
    });
});