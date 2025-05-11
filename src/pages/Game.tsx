import CardStairs from "../components/CardStairs";
import Deck from "../components/Deck";
import Hand from "../components/Hand";
import GameProvider from "../contexts/GameProvider";

const Game = () => {

    return (
        <GameProvider>
            <Deck />
            <CardStairs />
            <Hand />
        </ GameProvider>
    )
}

export default Game;