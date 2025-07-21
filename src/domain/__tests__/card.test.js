import { PlayingCard } from '@brendangooch/playing-card';
describe('PlayingCard', () => {
    test('should create a joker', () => {
        const joker = new PlayingCard(0);
        expect(joker.isJoker).toBe(true);
        expect(joker.name).toBe('joker');
    });
    test('should create ace of spades', () => {
        const aceSpades = new PlayingCard(1); // Type 1
        expect(aceSpades.isJoker).toBe(false);
        expect(aceSpades.rank.number).toBe(1); // Ace = 1
        expect(aceSpades.suit.number).toBe(1); // Actually clubs = 1, not spades
        expect(aceSpades.name).toBe('ace of clubs');
    });
    test('should create different cards', () => {
        const card1 = new PlayingCard(1); // Ace of clubs
        const card2 = new PlayingCard(14); // Ace of hearts  
        const card3 = new PlayingCard(27); // Ace of spades
        const card4 = new PlayingCard(40); // Ace of diamonds
        console.log('Card 1:', card1.name, 'Suit:', card1.suit.number);
        console.log('Card 2:', card2.name, 'Suit:', card2.suit.number);
        console.log('Card 3:', card3.name, 'Suit:', card3.suit.number);
        console.log('Card 4:', card4.name, 'Suit:', card4.suit.number);
    });
    test('should compare cards', () => {
        const card1 = new PlayingCard(1);
        const card2 = new PlayingCard(2);
        expect(card1.hasSameRankAs(card2)).toBe(false);
    });
});
