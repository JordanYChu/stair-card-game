
import '../assets/card.css';
import '../assets/hand.css'
import usePlayer from "../hooks/usePlayer";

const Hand = () => {
    const { hand } = usePlayer().player1;
    const { playCard } = usePlayer();
    return (
        <div>
            <h2>Hand</h2>
            <div className="hand">
                {hand.map((card, index) => (
                    <div key={index} className="card"
                        onClick={() => playCard(card)}
                    >
                        {card.value + card.suit}
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Hand;