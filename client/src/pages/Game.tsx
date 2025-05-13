import Deck from "../components/Deck";
import Player from "../components/Player";
import GameProvider from "../contexts/GameProvider";

const Game = () => {

    return (
        <GameProvider>
            <Deck />
            <Player />
        </ GameProvider>
    )
}

export default Game;