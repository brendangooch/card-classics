import { PlayingCard } from '../playing-card';
describe('PlayingCard', () => {
    describe('joker (type 0)', () => {
        const joker = new PlayingCard(0);
        test('should have type 0', () => {
            expect(joker.type).toBe(0);
        });
        test('should be identified as joker', () => {
            expect(joker.isJoker()).toBe(true);
        });
        test('should have joker rank and suit', () => {
            expect(joker.rank.number).toBe(0);
            expect(joker.suit.number).toBe(0);
            expect(joker.rank.name).toBe("joker");
            expect(joker.suit.name).toBe("joker");
        });
        test('should have correct full name', () => {
            expect(joker.fullName).toBe("joker");
        });
        test('should clone correctly', () => {
            const cloned = joker.clone();
            expect(cloned.type).toBe(0);
            expect(cloned.isJoker()).toBe(true);
            expect(cloned).not.toBe(joker); // different instance
        });
    });
    describe('regular cards', () => {
        test('should create ace of clubs (type 1)', () => {
            const card = new PlayingCard(1);
            expect(card.type).toBe(1);
            expect(card.isJoker()).toBe(false);
            expect(card.rank.number).toBe(1);
            expect(card.suit.number).toBe(1);
            expect(card.rank.name).toBe("ace");
            expect(card.suit.name).toBe("club");
            expect(card.fullName).toBe("ace of clubs");
        });
        test('should create king of diamonds (type 52)', () => {
            const card = new PlayingCard(52);
            expect(card.type).toBe(52);
            expect(card.isJoker()).toBe(false);
            expect(card.rank.number).toBe(13);
            expect(card.suit.number).toBe(4);
            expect(card.rank.name).toBe("king");
            expect(card.suit.name).toBe("diamond");
            expect(card.fullName).toBe("king of diamonds");
        });
        test('should create cards from different suits', () => {
            const aceClubs = new PlayingCard(1); // clubs
            const aceHearts = new PlayingCard(14); // hearts  
            const aceSpades = new PlayingCard(27); // spades
            const aceDiamonds = new PlayingCard(40); // diamonds
            expect(aceClubs.suit.name).toBe("club");
            expect(aceHearts.suit.name).toBe("heart");
            expect(aceSpades.suit.name).toBe("spade");
            expect(aceDiamonds.suit.name).toBe("diamond");
            // All should be aces
            expect(aceClubs.rank.name).toBe("ace");
            expect(aceHearts.rank.name).toBe("ace");
            expect(aceSpades.rank.name).toBe("ace");
            expect(aceDiamonds.rank.name).toBe("ace");
        });
    });
    describe('comparison methods', () => {
        test('should identify same rank correctly', () => {
            const aceClubs = new PlayingCard(1); // ace of clubs
            const aceHearts = new PlayingCard(14); // ace of hearts
            const kingClubs = new PlayingCard(13); // king of clubs
            expect(aceClubs.isSameRank(aceHearts)).toBe(true);
            expect(aceClubs.isSameRank(kingClubs)).toBe(false);
        });
        test('should identify same suit correctly', () => {
            const aceClubs = new PlayingCard(1); // ace of clubs
            const kingClubs = new PlayingCard(13); // king of clubs
            const aceHearts = new PlayingCard(14); // ace of hearts
            expect(aceClubs.isSameSuit(kingClubs)).toBe(true);
            expect(aceClubs.isSameSuit(aceHearts)).toBe(false);
        });
        test('should handle joker comparisons', () => {
            const joker = new PlayingCard(0);
            const ace = new PlayingCard(1);
            expect(joker.isSameRank(ace)).toBe(false);
            expect(joker.isSameSuit(ace)).toBe(false);
            expect(joker.isSameRank(joker)).toBe(true);
            expect(joker.isSameSuit(joker)).toBe(true);
        });
    });
    describe('cloning', () => {
        test('should create independent copies', () => {
            const original = new PlayingCard(25);
            const cloned = original.clone();
            expect(cloned.type).toBe(original.type);
            expect(cloned.fullName).toBe(original.fullName);
            expect(cloned).not.toBe(original); // different instances
        });
    });
});
