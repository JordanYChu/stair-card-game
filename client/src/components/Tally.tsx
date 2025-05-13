import usePlayer from "../hooks/usePlayer";
import '../assets/tally.css';

const Tally = () => {

    const { tally } = usePlayer().player1;

    return (
        <div>
            <h2>Tally</h2>
            <div className="hand">
                {tally.map((pair, index) => (
                    <div className="pair">
                        <div key={index} className="card">
                            {pair[0].value + pair[0].suit}
                        </div>
                        <div key={index} className="card">
                            {pair[1].value + pair[1].suit}
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Tally;