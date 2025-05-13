import { useContext } from "react";
import { GameContext } from "../contexts/GameProvider";
import type { Card, Pair } from "../contexts/GameProvider";
const usePlayer = () => {
    const { player1, currentCard, setHand, setTally, setStair } = useContext(GameContext);

    const playCard = (card: Card) => {
        // Remove played card
        setHand((prevHand: Card[]) =>
            prevHand.filter((c: Card) => c.id !== card.id)
        );
        // remove card from stairs
        let currStairCard = player1.stair[0];
        setStair((prevStair: Card[]) =>
            [...prevStair].slice(1)
        );
        // Add both cards to tally
        setTally((prevTally: Pair[]) =>
            [...prevTally, [card, currStairCard] as Pair]
        );
    }

    return {
        player1,
        currentCard,
        playCard
    }
}

export default usePlayer;

