import { useState, useEffect } from "react";
import Card from "./card";
import '../styles/cards.css'

//function to shuffle cards

function shuffleCards(array) {
    const shuffledCards = [...array]

    for (let i = shuffledCards.length - 1; i>0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]]
    }
    console.log(array)
    return shuffledCards
}

export default function Cards({ score, setScore, highScore, setHighScore }) {
    const [cards, setCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([])

    useEffect(() => {
        async function getPokemon() {
            try {
                const pokemon = []
                for (let i=1; i<12; i++) {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i*8}`);
                    const data = await response.json();
                    pokemon.push(data)
                }
                setCards(pokemon);
            } catch (error) {
                console.log(error)
            }
        }
        getPokemon()
    }, []);


    //function to use when card is clicked

    function handleClick(id) {
        //check if id is in clickedCards array

        console.log(id)

        //if yes, gameover

        // if no, add it...
        // increase score

        // check highscore
        // shuffle cards
        
        setCards(shuffleCards(cards))
    }

    

    return (
        <div className="cardsDisplay" >
            {cards.map(card => (
                    <Card
                    key={card.id}
                    data={card}
                    handleClick={handleClick}
                    />
            ))}
        </div>
    )
}

