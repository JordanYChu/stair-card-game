type Suit = "hearts" | "clubs" | "spades" | "diamonds";

export interface Card {
    id: string;
    rank: number;
    suit: Suit;
}
