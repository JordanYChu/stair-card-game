import '../assets/card.css';
import '../assets/hand.css'
import usePlayer from '../hooks/usePlayer';

const Deck = () => {
    const { currentCard } = usePlayer();

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