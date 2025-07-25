/**
 * used by concrete hand classes to analyse an array of playing cards of variable length
 */

import { PlayingCard } from "../playing-card";

export class HandAnalysis {

    private cards: number[] = [];

    public constructor(cards: number[] | null = null) {
        if (cards) this.setCards(cards);
    }

    public setCards(cards: number[]): void {
        this.cards = cards;
    }

    public get size(): number {
        return this.cards.length;
    }

    public get cardsUnordered(): number[] {
        return [...this.cards];
    }

    public get cardsOrdered(): number[] {
        return this.playingCards.sort((a, b) => (a.isHigherThan(b) ? 1 : -1)).map(card => card.type);
    }

    public get numJokers(): number {
        return this.playingCards.filter(card => card.isJoker()).length;
    }

    // return array containing index position of each card that is not a joker
    public get nonJokers(): number[] {
        return this.playingCards.map((card, index) => (card.isJoker()) ? -1 : index).filter(index => index !== -1);
    }

    // return a new card, and it's index position in the hand, with the same rank as the card in the hand with the highest rank
    public get highCard(): { index: number; card: PlayingCard } {
        return {
            index: this.highCardIndex,
            card: new PlayingCard(this.highCardRank)
        };
    }

    // return a new card 1 rank higher than the card in the hand with the highest rank
    public get highCardPlusOne(): PlayingCard {
        return new PlayingCard((this.highCardRank + 1)); // ??
    }

    // return a new card with the same rank as the card in the hand with the lowest rank
    public get lowCard(): { index: number; card: PlayingCard } {
        return {
            index: this.lowCardIndex,
            card: new PlayingCard(this.lowCardRank)
        };
    }

    // all cards in the hand have the same rank
    public get allSameRank(): boolean {
        // return this.sameRank(this.cards.map((card, index) => index));
        return this.sameRank(Array.from(this.playingCards.keys()));
    }

    // all cards in the hand have the same suit
    public get allSameSuit(): boolean {
        return this.sameSuit(this.playingCards.map((card, index) => index));
    }

    // NO cards in the hand have the same rank
    // Set removes duplicates, if any ranks are removed, it means there are at least 2 cards with the same rank
    public get noSameRanks(): boolean {
        return Array.from(new Set(this.ranks)).length === this.playingCards.length;
    }

    // numeric value between highest ranked card and lowest ranked card or -1 if there isn't a high or low card
    public get valueBetweenHighLow(): number {
        if (this.nonJokers.length < 2) return -1;
        return this.valueBetween(this.lowCardIndex, this.highCardIndex);
    }

    // a clone of the card at index or null if no card at that index
    public cardAt(index: number): PlayingCard | null {
        const card = this.playingCards[index];
        return (card) ? card.clone() : null;
    }

    // // returns number of cards in hand with rank number
    public containsRank(rank: number): number {
        return this.playingCards.filter(card => card.isRankNumber(rank)).length;
    }

    // true if hand contains ALL of the rank numbers in ranks parameter
    public containsRanks(ranks: number[]): boolean {
        for (let i = 0; i < ranks.length; i++) {
            if (this.containsRank(ranks[i]) === 0) return false;
        }
        return true;
    }

    // true if cards at given indexes in hand have the same rank
    public sameRank(indexes: number[]): boolean {
        // return Array.from(new Set(this.ranks.filter((rank, index) => indexes.includes(index)))).length === 1;
        const card0 = this.cardAt(indexes[0]);
        if (!card0) return false;
        const rank = card0.rank.number;
        for (let i = 1; i < indexes.length; i++) {
            const card = this.cardAt(indexes[i]);
            if (!card || card.rank.number !== rank) return false;
        }
        return true;
    }

    // true if cards at given indexes in hand have the same suit
    public sameSuit(indexes: number[]): boolean {
        const card0 = this.cardAt(indexes[0]);
        if (!card0) return false;
        const suit = card0.suit.number;
        for (let i = 1; i < indexes.length; i++) {
            const card = this.cardAt(indexes[i]);
            if (!card || card.suit.number !== suit) return false;
        }
        return true;
    }

    // numeric value between cards at indexA and indexB or -1 if either card is a joker or an invalid index was entered
    public valueBetween(indexA: number, indexB: number): number {
        if (indexA !== indexB) {
            const cardA = this.cardAt(indexA);
            const cardB = this.cardAt(indexB);
            if (cardA && cardB) {
                return cardA.valueBetweenRanks(cardB);
            }
        }
        return -1;
    }

    private get playingCards(): PlayingCard[] {
        return this.cards.map(type => new PlayingCard(type));
    }

    private get ranks(): number[] {
        return this.playingCards.map(card => card.rank.number);
    }

    private get highCardRank(): number {
        return Math.max(...this.ranks);
    }

    // // lowest ranked card excluding jokers (0)
    private get lowCardRank(): number {
        return Math.min(...this.ranks.filter(rank => rank !== 0));
    }

    private get highCardIndex(): number {
        return this.playingCards.map((card, index) => (card.isRankNumber(this.highCardRank)) ? index : -1).filter(index => index !== -1)[0];
    }

    private get lowCardIndex(): number {
        return this.playingCards.map((card, index) => (card.isRankNumber(this.lowCardRank)) ? index : -1).filter(index => index !== -1)[0];
    }

}