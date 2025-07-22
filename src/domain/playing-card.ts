import { Rank } from './rank';
import { Suit } from './suit';

export class PlayingCard {
  private _type: number;
  private _rank: Rank;
  private _suit: Suit;

  constructor(type: number) {
    this._type = type;
    this._rank = new Rank(type);
    this._suit = new Suit(type);
  }

  get type(): number {
    return this._type;
  }

  get rank(): Rank {
    return this._rank;
  }

  get suit(): Suit {
    return this._suit;
  }

  isJoker(): boolean {
    return this._type === 0;
  }

  get fullName(): string {
    if (this.isJoker()) return "joker";
    return `${this.rank.name} of ${this.suit.namePlural}`;
  }

  clone(): PlayingCard {
    return new PlayingCard(this._type);
  }

  // Comparison methods for hand analysis
  isSameRank(other: PlayingCard): boolean {
    return this.rank.number === other.rank.number;
  }

  isSameSuit(other: PlayingCard): boolean {
    return this.suit.number === other.suit.number;
  }

  // Returns true if this card's rank matches the given rank number
  isRankNumber(rank: number): boolean {
    return !this.isJoker() && this.rank.number === rank;
  }

  // Returns true if this card's suit matches the given suit number
  isSuitNumber(suit: number): boolean {
    return !this.isJoker() && this.suit.number === suit;
  }

  // Returns true if this card's rank is higher than another card's rank
  isHigherThan(other: PlayingCard): boolean {
    if (this.isJoker()) return false; // Jokers are not ranked
    if (other.isJoker()) return true;
    return this.rank.number > other.rank.number;
  }

  // Returns the absolute difference between this card's rank and another card's rank
  valueBetweenRanks(other: PlayingCard): number {
    if (this.isJoker() || other.isJoker()) return 0;
    return Math.abs(this.rank.number - other.rank.number);
  }

}