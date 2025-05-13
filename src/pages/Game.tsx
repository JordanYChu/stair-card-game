import CardStairs from "../components/CardStairs";
import Deck from "../components/Deck";
import Hand from "../components/Hand";
import Tally from "../components/Tally";
import GameProvider from "../contexts/GameProvider";

const Game = () => {

    return (
        <GameProvider>

            <Deck />
            <Tally />
            <CardStairs />
            <Hand />
        </ GameProvider>
    )
}

export default Game;