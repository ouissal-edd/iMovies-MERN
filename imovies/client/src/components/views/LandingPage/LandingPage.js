import React, { useEffect, useState } from 'react'
import {FcLike,FcMediumPriority} from 'react-icons/fc'
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from '../../Config'
import MainImage from './Sections/MainImage'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LandingPage.css'

function LandingPage() {

    const [Movies, setMovies] = useState([])
    const [Recent, setRecent] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
  
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=5`;
        fetchMovies(endpoint)
    }, [])

    useEffect(() => {
        const endpt = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchRecent(endpt)
    }, [])

 
    const fetchRecent = (endpt) => {
        fetch(endpt)
            .then(result => result.json())
            .then(result => {
                console.log('recent',result)

            setRecent([...Recent, ...result.results])
            }
            )
            .catch(error => console.error('Error:', error)
            )
    }
    const fetchMovies = (endpoint) => {

        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                console.log(result)
                console.log('Movies',...Movies,'aft')
                console.log('result',...result.results)
                setMovies([...Movies, ...result.results])
                setRecent([...Movies, ...result.results])
                setMainMovieImage(MainMovieImage || result.results[17])
            }
            )
            .catch(error => console.error('Error:', error)
            )
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3 ,

        responsive: [
            {
              breakpoint: 1432,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1 ,
              }
            },
          
          
          ]

      };



      const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        vertical: true,
        verticalSwiping: true,
        arrows: false,


    };

    return (
        <div style={{ width: '100%', margin: '0' }}>
            {MainMovieImage &&
                <MainImage
                    image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${MainMovieImage.backdrop_path}`}
                    title={MainMovieImage.original_title}
                    text={MainMovieImage.overview}
                />

            }
<div  className='Countainer-slider'>

            <div className='slider-column'>
                <div className='first'>
                <h2 className='title-slider'> Popular</h2>
                <Slider {...settings}>
                {Movies && Movies.map((movie, index) => (
                  <div key={index}>
                    <a href={`/movie/${movie.id}`} >
                     <img alt={movie.original_title} src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`} />
                    </a>
                </div>
                ))}
                 </Slider>
         </div>
         <div className="slider-bas">
            <h4 className='title-slider'>Recent Films </h4>

                <Slider {...settings2}>
                    {Recent && Recent.map((movie, index) => (
                    <div  key={index}>
                        <div className="card-bas">
                            <img alt={movie.original_title} src={`${IMAGE_BASE_URL}/w200${movie.backdrop_path}`}/>
                            <div className="desc-s">
                                <h4>{movie.original_title}</h4>
                                <p>{movie.release_date}</p>
                            </div>
                            <div className="desc-s">

                            <h4>{movie.vote_average} <FcMediumPriority/> </h4>
                            <p>{movie.vote_count} <FcLike /></p>
</div>
                        </div>
                        </div>

                    ))}
                </Slider>
            </div>
            </div>

            <div className="sliderv2">
            <h4 className='title-slider'>More </h4>

                <Slider {...settings2}>
                    {Movies && Movies.map((movie, index) => (
                    <div  key={index}>
                        <div className="card-v2">
                            <img alt={movie.original_title} src={`${IMAGE_BASE_URL}/w200${movie.backdrop_path}`}/>
                            <div className="desc-s">
                                <h3>{movie.original_title}</h3>
                                <p>{movie.release_date}</p>
                            </div>
                        </div>
                        </div>

                    ))}
                </Slider>
            </div>
            </div>

     

        </div>
    )
}

export default LandingPage
