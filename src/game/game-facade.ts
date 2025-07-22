import { Deck } from '../domain/deck';

/**
 * 
 */

export class GameFacade {
    private deck: Deck;

    constructor(config: { jokers?: number } = {}) {
        // Initialize modules with config
        this.deck = new Deck(config.jokers ?? 0);
    }

    public start(): void {
        console.log("Bastard Brag game started!");
        // Initialize game state, players, and deck
        // Implement game logic here
    }

    restart(): void {
        // Reset game state and start over
        this.deck.init();
        // this.mediator.resetGame();
    }

    shutdown(): void {
        // Clean up resources if needed
    }

}