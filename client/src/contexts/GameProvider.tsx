import React, { createContext, useState } from "react";

type GameState = 'start' | 'playing' | 'end';
type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';

export interface Card {
    id: string,
    value: number,
    suit: Suit,
}

export type Pair = [Card, Card];

interface Player {
    id: string,
    name: string,
    tally: [Card, Card][],
    hand: Card[],
    stair: Card[],
}

interface GameContextType {
    gameState: GameState,
    currentCard: Card,
    player1: Player,
    player2: Player,
    setGameState: () => boolean;
    setTally: React.Dispatch<React.SetStateAction<Pair[]>>;
    setHand: React.Dispatch<React.SetStateAction<Card[]>>;
    setStair: React.Dispatch<React.SetStateAction<Card[]>>;
}

export const GameContext = createContext<GameContextType>({

});

const GameProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentCard, setCurrentCard] = useState<Card>({
        id: "1",
        value: 1,
        suit: 'hearts'
    } as Card);
    const [hand, setHand] = useState<Card[]>([{
        id: "1",
        value: 1,
        suit: 'hearts'
    }, {
        id: "2",
        value: 2,
        suit: 'diamonds'
    }, {
        id: "3",
        value: 3,
        suit: 'clubs'
    }, {
        id: "4",
        value: 4,
        suit: 'spades'
    }, {
        id: "5",
        value: 5,
        suit: 'hearts'
    }]);
    const [stair, setStair] = useState<Card[]>([{
        id: "1",
        value: 1,
        suit: 'hearts'
    }, {
        id: "2",
        value: 2,
        suit: 'diamonds'
    }, {
        id: "3",
        value: 3,
        suit: 'clubs'
    }, {
        id: "4",
        value: 4,
        suit: 'spades'
    }, {
        id: "5",
        value: 5,
        suit: 'hearts'
    }]);
    const [tally, setTally] = useState<Pair[]>([]);

    const gameContext = {
        gameState: 'end' as GameState,
        currentCard,
        player1: {
            id: "", name: "",
            hand,
            stair,
            tally
        },
        player2: {
            id: "", name: "",
            hand,
            stair,
            tally
        },
        setGameState: () => {
            return !!false
        },
        setHand,
        setTally,
        setStair
    }

    return (
        <GameContext.Provider value={gameContext}>
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;