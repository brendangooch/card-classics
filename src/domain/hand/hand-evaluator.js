import { Trip3s } from './trip3s';
import { ThreeOfAKind } from './three-of-a-kind';
import { StraightFlush } from './straight-flush';
import { Straight } from './straight';
import { Flush } from './flush';
import { Pair } from './pair';
import { NoHand } from './no-hand';
export class HandEvaluator {
    static evaluate(cards) {
        const strategies = [
            Trip3s,
            ThreeOfAKind,
            StraightFlush,
            Straight,
            Flush,
            Pair
        ];
        for (const Strategy of strategies) {
            const hand = new Strategy(cards);
            if (hand.isValid(cards))
                return hand;
        }
        return new NoHand(cards);
    }
}
