import useGame from "../hooks/useGame";

import '../assets/card.css';
import '../assets/hand.css'

const Hand = () => {
    const { hand } = useGame().player1;
    const { playCard } = useGame();
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