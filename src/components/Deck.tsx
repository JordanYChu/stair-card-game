import '../assets/card.css';
import '../assets/hand.css'
import useGame from '../hooks/useGame';

const Deck = () => {
    const { currentCard } = useGame();

    return (
        <div className="deck">
            <h1>Deck</h1>
            <div className="card">
                {currentCard.value + currentCard.suit}
            </div>
        </div>
    );
}

export default Deck;