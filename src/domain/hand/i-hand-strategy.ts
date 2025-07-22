import { iHand } from './i-hand';

export interface iHandStrategy extends iHand {
    isValid(cards: number[]): boolean;
}