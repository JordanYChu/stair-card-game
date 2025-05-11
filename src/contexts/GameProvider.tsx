import { createContext } from "react";

interface GameContextType {
    gameState: any;
    setGameState: (state: any) => boolean;
}

const GameContext = createContext<GameContextType | null>(null);

const GameProvider = ({ children }: { children: React.ReactNode }) => {

    const gameContext = {
        gameState: true,
        setGameState: (state: any) => { return !!state }
    }
    return (
        <GameContext.Provider value={gameContext}>
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;