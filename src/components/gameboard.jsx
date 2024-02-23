import { useState } from "react";
import Cards from "./cards";

export default function Gameboard() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    return (
        <div className="main">
            <section className="header">
                <div className="info">
                    <h1 className="title">Memory Card Game</h1>
                    <h4 className="author">By Sam Campbell</h4>
                </div>
                <div className="scores">
                    <div className="currentScore">Current Score: {score} </div>
                    <div className="highScore">High Score: {highScore} </div>
                </div>
            </section>
            <section className="gameBoard">
                <Cards
                    score={score}
                    setScore={setScore}
                    highScore={highScore}
                    setHighScore={setHighScore}
                />
            </section>
        </div>
    )
}