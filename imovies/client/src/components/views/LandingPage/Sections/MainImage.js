import React from 'react'
import './MainImage.css'
import Favorite from '../../MovieDetail/Sections/Favorite';


function MainImage(props ) {
    return (
        <div className='Intro'   
        style={{
            background:
        `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${props.image}'), #1c1c1c`,
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            width: '95%',
            position: 'relative'
        }}
        >
            
        <div className="showcase-area">

            <div className="container">
                <div className="left">
                    <div className="big-title">
                        <h1>{props.title}.</h1>
                    </div>
                    <p className="text">
                    {props.text} 
                    </p>
                    <div>
                    <Favorite movieInfo={props.movieInfo} movieId={props.movieId} userFrom={localStorage.getItem('userId')} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MainImage
