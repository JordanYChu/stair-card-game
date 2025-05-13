import { useContext } from "react";
import { GameContext } from "../contexts/GameProvider";
import type { Card, Pair } from "../contexts/GameProvider";
const useGame = () => {
    const { player1, currentCard, setHand, setTally } = useContext(GameContext);

    const playCard = (card: Card) => {
        setHand((prevHand: Card[]) =>
            prevHand.filter((c: Card) => c.id !== card.id)
        );
        setTally((prevTally: Pair[]) =>
            [...prevTally, [card, currentCard] as Pair]
        );
    }

    return {
        player1,
        currentCard,
        playCard
    }
}

export default useGame;

