import { Rank } from '../rank';

describe('Rank', () => {
    describe('joker (type 0)', () => {
        const jokerRank = new Rank(0);

        test('should return 0 for joker number', () => {
            expect(jokerRank.number).toBe(0);
        });

        test('should return "joker" for joker name', () => {
            expect(jokerRank.name).toBe("joker");
        });

        test('should return "jokers" for joker plural', () => {
            expect(jokerRank.namePlural).toBe("jokers");
        });

        test('should return "a joker" with article', () => {
            expect(jokerRank.nameWithArticle).toBe("a joker");
        });
    });

    describe('regular cards', () => {
        test('should calculate rank numbers correctly', () => {
            expect(new Rank(1).number).toBe(1);   // ace
            expect(new Rank(13).number).toBe(13); // king
            expect(new Rank(14).number).toBe(1);  // ace of next suit
            expect(new Rank(26).number).toBe(13); // king of second suit
            expect(new Rank(52).number).toBe(13); // king of last suit
        });

        test('should return correct rank names', () => {
            expect(new Rank(1).name).toBe("ace");
            expect(new Rank(6).name).toBe("six");
            expect(new Rank(8).name).toBe("eight");
            expect(new Rank(11).name).toBe("jack");
            expect(new Rank(13).name).toBe("king");
        });

        test('should handle plural names correctly', () => {
            expect(new Rank(1).namePlural).toBe("aces");
            expect(new Rank(6).namePlural).toBe("sixes"); // special case
            expect(new Rank(13).namePlural).toBe("kings");
        });

        test('should use correct articles', () => {
            expect(new Rank(1).nameWithArticle).toBe("an ace");  // vowel
            expect(new Rank(8).nameWithArticle).toBe("an eight"); // vowel
            expect(new Rank(11).nameWithArticle).toBe("a jack");  // consonant
            expect(new Rank(13).nameWithArticle).toBe("a king");  // consonant
        });
    });
});