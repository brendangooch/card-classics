/**
 *
 */

import { Deck } from '../../domain/deck';
import { HandEvaluator } from '../../domain/hand/hand-evaluator';
import { IGameMediator } from '../../game/i-game-mediator';

export class GameModel {

    private deck: Deck;
    private playerHands: number[][];
    private communityCards: number[];
    private round: number;
    private playerLives: number[];
    private currentPlayer: number;
    private dealer: number;
    private knockedPlayer: number | null;
    private mediator: IGameMediator | null = null;

    constructor(config: { jokers?: number, numPlayers?: number } = {}) {
        this.deck = new Deck(config.jokers ?? 0);
        this.playerHands = [];
        this.communityCards = [];
        this.round = 1;
        this.playerLives = Array(config.numPlayers ?? 2).fill(3); // Example: 3 lives per player
        this.currentPlayer = 0;
        this.dealer = 0;
        this.knockedPlayer = null;
    }

    startNewRound(): void {
        // Shuffle and deal cards
        this.deck.init();
        this.playerHands = this.dealPlayerHands();
        this.communityCards = this.dealCommunityCards();
        this.round += 1;
        this.knockedPlayer = null;
    }

    dealPlayerHands(): number[][] {
        // TODO: Implement actual dealing logic
        return [];
    }

    dealCommunityCards(): number[] {
        // TODO: Implement actual dealing logic
        return [];
    }

    evaluateHands(): any[] {
        // Evaluate all player hands
        return this.playerHands.map(hand => HandEvaluator.evaluate(hand));
    }

    isRoundOver(): boolean {
        // TODO: Implement round-over logic
        return false;
    }

    isGameOver(): boolean {
        // Example: Game over if any player has 0 lives
        return this.playerLives.some(lives => lives <= 0);
    }

    nextTurn(): void {
        // TODO: Advance to next player
    }

    playMove(move: any): void {
        // TODO: Validate and apply player move
    }

    knock(playerIndex: number): void {
        this.knockedPlayer = playerIndex;
        // TODO: Handle knock logic
    }

    endRound(): void {
        // TODO: Resolve round, update lives, etc.
    }

    endGame(): void {
        // TODO: Handle end of game logic
    }

    public setMediator(mediator: IGameMediator): void {
        this.mediator = mediator;
    }

    // Add more game logic methods as needed
}

// import type { ModelCards } from "./model-cards";
// import type { ModelDealer } from "./model-dealer";
// import type { PlayerMove } from "./player-move";
// import type { ModelRoundEnder } from "./model-round-ender";
// import type { iGameMediator } from "./i-game-mediator";
// import type { ModelLives } from "./model-lives";
// import type { ModelProperties } from "./model-properties";

// export class GameModel {

//     public static TURN_LIMIT: number = 20;

//     private mediator: iGameMediator;
//     private cards: ModelCards;
//     private lives: ModelLives;
//     private props: ModelProperties;
//     private dealer: ModelDealer;
//     private roundEnder: ModelRoundEnder;

//     public setMediator(mediator: iGameMediator): void {
//         this.mediator = mediator;
//     }

//     public setCards(cards: ModelCards): void {
//         this.cards = cards;
//     }

//     public setLives(lives: ModelLives): void {
//         this.lives = lives;
//     }

//     public setProps(props: ModelProperties): void {
//         this.props = props;
//     }

//     public setDealer(dealer: ModelDealer): void {
//         this.dealer = dealer;
//     }

//     public setRoundEnder(roundEnder: ModelRoundEnder): void {
//         this.roundEnder = roundEnder;
//     }

//     public get somebodyKnocked(): boolean {
//         return this.props.somebodyKnocked;
//     }

//     public get turnLimitReached(): boolean {
//         return this.props.turn === GameModel.TURN_LIMIT;
//     }

//     public get isRoundOver(): boolean {
//         return this.props.isRoundOver;
//     }

//     public get isGameOver(): boolean {
//         return this.lives.isGameOver;
//     }

//     // ### starts the game ###
//     public selectDealer(): void {
//         this.props.selectDealer();
//         this.mediator.dealerSelected(this.props.dealer);
//     }

//     public nextRound(): void {
//         this.props.nextRound();
//         this.props.nextDealer(); // <-- sets current player to current dealer (skips on first round)
//         this.props.nextPlayer(); // <-- sets current player to player after dealer
//         this.dealer.deal();
//         this.mediator.nextRound(this.roundData);
//     }

//     public restartRound(): void {
//         if (!this.turnLimitReached) throw new Error('max turns not exceeded');
//         if (this.somebodyKnocked) throw new Error('cannot restart round if a player has already knocked');
//         this.props.restartRound(); // <-- sets current player to current dealer
//         this.props.nextPlayer(); // <-- sets current player to player after dealer
//         this.dealer.deal();
//         this.mediator.roundRestarted(this.roundData);
//     }

//     public nextTurn(): void {
//         this.props.nextTurn();
//         this.mediator.nextTurn(this.turnData);
//     }

//     public play(move: PlayerMove): void {
//         this.validateMove(move);
//         this.props.nextPlayer();
//         if (move.isSwapSingle) this.swapSingle(move);
//         if (move.isSwapAll) this.swapAll(move);
//         if (move.isKnock) this.knock(move);

//     }

//     public endRound(): void {
//         if (!this.isRoundOver) throw new Error('not round over');
//         this.roundEnder.endRound();
//         this.mediator.roundOver(this.roundEnder.data);
//     }

//     public endGame(): void {
//         if (!this.isGameOver) throw new Error('not game over');
//         this.mediator.gameOver(this.lives.winner);
//     }

//     private swapSingle(move: PlayerMove): void {
//         this.cards.swapSingle(move.player, move.playerIndex, move.middleIndex);
//         this.mediator.swappedSingle(this.swappedSingleData(move.player, move.playerIndex, move.middleIndex));
//     }

//     private swapAll(move: PlayerMove): void {
//         this.cards.swapAll(move.player);
//         this.mediator.swappedAll(this.swappedAllData(move.player, move.faceDownIndex));
//     }

//     private knock(move: PlayerMove): void {
//         this.props.knock(move.player);
//         this.mediator.knocked(this.props.whoKnocked);
//     }

//     private validateMove(move: PlayerMove): void {
//         if (move.player !== this.props.current) throw new Error('not player turn');
//         if (move.isNull) throw new Error('move does not have a type');
//     }

//     // client expects original player and middle card, not swapped card
//     private swappedSingleData(player: number, pIndex: number, mIndex: number): tSwappedSingle {
//         return {
//             player: player,
//             playerIndex: pIndex,
//             middleIndex: mIndex,
//             playerCard: this.cards.middleCardAt(mIndex),
//             middleCard: this.cards.playerCardAt(this.props.current, pIndex)
//         }
//     }

//     // client expects original player and middle cards, not swapped cards
//     private swappedAllData(player: number, fDIndex: number): tSwappedAll {
//         return {
//             player: player,
//             playerCards: this.cards.middle,
//             middleCards: this.cards.forPlayer(this.props.current),
//             faceDownIndex: fDIndex
//         }
//     }

//     private get roundData(): tRound {
//         return {
//             dealer: this.props.dealer,
//             round: this.props.round,
//             playerCards: this.cards.player,
//             middleCards: this.cards.middle
//         }
//     }

//     private get turnData(): tTurn {
//         return {
//             player: this.props.current,
//             playerCards: this.cards.forPlayer(this.props.current),
//             lives: this.lives.numLives(this.props.current),
//             middleCards: this.cards.middle,
//             numRemaining: this.lives.numRemaining,
//             turn: this.props.turn,
//             whoKnocked: this.props.whoKnocked,
//             knockAvailable: this.props.knockAvailable,
//             somebodyKnocked: this.somebodyKnocked
//         }
//     }



// }