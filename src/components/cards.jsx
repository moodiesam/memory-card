import { useState, useEffect } from "react";
import Card from "./card";

export default function Cards({ children }) {
    const [cards, setCards] = useState([]);


    useEffect(() => {
        async function getPokemon() {
            try {
                const pokemon = []
                for (let i=1; i<9; i++) {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                    const data = await response.json();
                    pokemon.push(data)
                }
                setCards(pokemon);
            } catch (error) {
                console.log(error)
            }
        }
        getPokemon()
    }, [])

    console.log(cards)

    return (
        <div>
            {cards.map(card => (
                <Card
                key={card.id}
                data={card}
                />
            ))}
        </div>
    )
}

