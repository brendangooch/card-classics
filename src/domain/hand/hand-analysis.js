/**
 * used by concrete hand classes to analyse an array of playing cards of variable length
 */
import { PlayingCard } from "../playing-card";
export class HandAnalysis {
    constructor(cards = null) {
        this.cards = [];
        if (cards)
            this.setCards(cards);
    }
    setCards(cards) {
        this.cards = cards;
    }
    get size() {
        return this.cards.length;
    }
    get cardsUnordered() {
        return [...this.cards];
    }
    get cardsOrdered() {
        return this.playingCards.sort((a, b) => (a.isHigherThan(b) ? 1 : -1)).map(card => card.type);
    }
    get numJokers() {
        return this.playingCards.filter(card => card.isJoker()).length;
    }
    // return array containing index position of each card that is not a joker
    get nonJokers() {
        return this.playingCards.map((card, index) => (card.isJoker()) ? -1 : index).filter(index => index !== -1);
    }
    // return a new card, and it's index position in the hand, with the same rank as the card in the hand with the highest rank
    get highCard() {
        return {
            index: this.highCardIndex,
            card: new PlayingCard(this.highCardRank)
        };
    }
    // return a new card 1 rank higher than the card in the hand with the highest rank
    get highCardPlusOne() {
        return new PlayingCard((this.highCardRank + 1)); // ??
    }
    // return a new card with the same rank as the card in the hand with the lowest rank
    get lowCard() {
        return {
            index: this.lowCardIndex,
            card: new PlayingCard(this.lowCardRank)
        };
    }
    // all cards in the hand have the same rank
    get allSameRank() {
        // return this.sameRank(this.cards.map((card, index) => index));
        return this.sameRank(Array.from(this.playingCards.keys()));
    }
    // all cards in the hand have the same suit
    get allSameSuit() {
        return this.sameSuit(this.playingCards.map((card, index) => index));
    }
    // NO cards in the hand have the same rank
    // Set removes duplicates, if any ranks are removed, it means there are at least 2 cards with the same rank
    get noSameRanks() {
        return Array.from(new Set(this.ranks)).length === this.playingCards.length;
    }
    // numeric value between highest ranked card and lowest ranked card or -1 if there isn't a high or low card
    get valueBetweenHighLow() {
        if (this.nonJokers.length < 2)
            return -1;
        return this.valueBetween(this.lowCardIndex, this.highCardIndex);
    }
    // a clone of the card at index or null if no card at that index
    cardAt(index) {
        const card = this.playingCards[index];
        return (card) ? card.clone() : null;
    }
    // // returns number of cards in hand with rank number
    containsRank(rank) {
        return this.playingCards.filter(card => card.isRankNumber(rank)).length;
    }
    // true if hand contains ALL of the rank numbers in ranks parameter
    containsRanks(ranks) {
        for (let i = 0; i < ranks.length; i++) {
            if (this.containsRank(ranks[i]) === 0)
                return false;
        }
        return true;
    }
    // true if cards at given indexes in hand have the same rank
    sameRank(indexes) {
        // return Array.from(new Set(this.ranks.filter((rank, index) => indexes.includes(index)))).length === 1;
        const card0 = this.cardAt(indexes[0]);
        if (!card0)
            return false;
        const rank = card0.rank.number;
        for (let i = 1; i < indexes.length; i++) {
            const card = this.cardAt(indexes[i]);
            if (!card || card.rank.number !== rank)
                return false;
        }
        return true;
    }
    // true if cards at given indexes in hand have the same suit
    sameSuit(indexes) {
        const card0 = this.cardAt(indexes[0]);
        if (!card0)
            return false;
        const suit = card0.suit.number;
        for (let i = 1; i < indexes.length; i++) {
            const card = this.cardAt(indexes[i]);
            if (!card || card.suit.number !== suit)
                return false;
        }
        return true;
    }
    // numeric value between cards at indexA and indexB or -1 if either card is a joker or an invalid index was entered
    valueBetween(indexA, indexB) {
        if (indexA !== indexB) {
            const cardA = this.cardAt(indexA);
            const cardB = this.cardAt(indexB);
            if (cardA && cardB) {
                return cardA.valueBetweenRanks(cardB);
            }
        }
        return -1;
    }
    get playingCards() {
        return this.cards.map(type => new PlayingCard(type));
    }
    get ranks() {
        return this.playingCards.map(card => card.rank.number);
    }
    get highCardRank() {
        return Math.max(...this.ranks);
    }
    // // lowest ranked card excluding jokers (0)
    get lowCardRank() {
        return Math.min(...this.ranks.filter(rank => rank !== 0));
    }
    get highCardIndex() {
        return this.playingCards.map((card, index) => (card.isRankNumber(this.highCardRank)) ? index : -1).filter(index => index !== -1)[0];
    }
    get lowCardIndex() {
        return this.playingCards.map((card, index) => (card.isRankNumber(this.lowCardRank)) ? index : -1).filter(index => index !== -1)[0];
    }
}
