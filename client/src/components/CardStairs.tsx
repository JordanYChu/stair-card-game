import useGame from "../hooks/usePlayer";
import '../assets/card.css';
import '../assets/hand.css'
const CardStairs = () => {
    const { stair } = useGame().player1;
    return (
        <div>
            <h2>Stairs</h2>
            <div className="hand">
                {stair.map((card, index) => (
                    <div key={index} className="card">
                        {card.value + card.suit}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardStairs;