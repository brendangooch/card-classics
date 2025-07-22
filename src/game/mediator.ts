/**
 * 
 */

import { IGameMediator } from "./i-game-mediator";

export class Mediator implements IGameMediator {

    // Implement IGameMediator methods here
    dealerSelected(dealer: number): void {
        // Handle dealer selection logic
    }
    nextRound(roundData: any): void {
        // Handle logic for starting the next round
    }
    roundRestarted(roundData: any): void {
        // Handle logic for restarting the round
    }
    nextTurn(turnData: any): void {
        // Handle logic for advancing to the next turn
    }
    swappedSingle(data: any): void {
        // Handle logic for single card swap
    }
    swappedAll(data: any): void {
        // Handle logic for all cards swap
    }
    knocked(whoKnocked: number): void {
        // Handle logic for when a player knocks
    }
    roundOver(roundEndData: any): void {
        // Handle logic for when the round is over
    }
    gameOver(winner: number): void {
        // Handle logic for when the game is over
    }
}