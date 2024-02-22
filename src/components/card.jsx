import '../styles/card.css'
import PropTypes from "prop-types"


export default function Card({ data }) {

    if (!data) return
    else {

    console.log(data)



    return (
        <div>
            <img 
                src={data.sprites.front_default}
            />
            <p>Hello2</p>
        </div>
    )
}}