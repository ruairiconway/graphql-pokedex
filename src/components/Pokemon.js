import React from 'react'

export function Pokemon({ pokemon }) {
    const { name, number, image, maxHP, maxCP, types, resistant, weaknesses } = pokemon
    return (
        <div className="pokemon">
            <div className="pokemon__head">
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <div className="pokemon__image">
                <img src={image} alt={`portrait of ${name}`}/>
            </div>
            <div className="pokemon__meta">
                <p>{maxHP}</p>
                <p>{maxCP}</p>
                <p>{types}</p>
                <p>{resistant}</p>
                <p>{weaknesses}</p>
            </div>
        </div>
    )
}