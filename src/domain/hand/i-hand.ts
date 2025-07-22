export interface iHand {
    get cardsOrdered(): number[];
    get description(): string;
    get score(): number;
    get rank(): number;      // e.g., 1 for highest
    get name(): string;      // e.g., "Trip 3s"
}