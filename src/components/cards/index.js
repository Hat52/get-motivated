import React from 'react';
import './index.css'
import {BiComment} from 'react-icons/bi'
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai'
import {BsShare}from 'react-icons/bs'
export default function Card ({index,author,quote}) {
    return(
        <div className='card-container' key={index}>
            <div className={`Question__tag ${index % 2 === 0?'even_div':'odd_div'}`}></div>
            <p className="quote">
                {quote}
            </p>
            <div className="author-name">
                {author}
            </div>
            <section className="comment-section-container">
                <div className="comment-section">
                    <div className="Icon-text"><span>Comment</span> <BiComment fontSize="1.5em" color="#45CCDF" className="comment-icon" size="20"/></div>
                    <div className="Icon-text"><span>Like</span> <AiOutlineLike fontSize="1.5em" color="#45CCDF" className="comment-icon" size="20"/></div>
                    <div className="Icon-text"><span>Dislike</span> <AiOutlineDislike fontSize="1.5em" color="#45CCDF" className="comment-icon" size="20"/></div>
                    <div className="Icon-text"><span>Share</span> <BsShare fontSize="1.5em" color="#45CCDF" className="comment-icon" size="20"/></div>
                </div>

                
            </section>
        </div>
    )
}