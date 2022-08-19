import React from 'react';
import './index.css'
export default function Card ({index,data}) {
    return(
        <div className='card-container'>
            <div className={`Question__tag ${index % 2 === 0?'even_div':'odd_div'}`}></div>
            <p className="quote">
                {data.quote}
            </p>
            <div className="author-name">
                {data.author}
            </div>
        </div>
    )
}