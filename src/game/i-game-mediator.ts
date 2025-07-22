export interface IGameMediator {
    dealerSelected(dealer: number): void;
    nextRound(roundData: any): void;
    roundRestarted(roundData: any): void;
    nextTurn(turnData: any): void;
    swappedSingle(data: any): void;
    swappedAll(data: any): void;
    knocked(whoKnocked: number): void;
    roundOver(roundEndData: any): void;
    gameOver(winner: number): void;
    // Add more methods as needed for your game events
}