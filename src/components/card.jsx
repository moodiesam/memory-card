import '../styles/card.css'

export default function Card({ data, handleClick }) {

   

    return (
        <div className='pokemonCard' onClick={() => handleClick(data.id)} >
            <img 
                src={data.sprites.front_default}
            />
            <p>{data.name}</p>
        </div>
    )
}