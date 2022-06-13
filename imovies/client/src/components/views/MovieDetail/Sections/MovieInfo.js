import React from 'react'
import {  IMAGE_BASE_URL} from '../../../Config'


function MovieInfo(props) {

    const { movie } = props;
    
    return (
      <>
        <div className='titleComments'>
      <span className='comment-tiret'></span> <h4>About</h4><span className='comment-tiret'></span> 
      </div>

      <div className='Details-M'>
        <div className='img-M'>
        <img src={`${IMAGE_BASE_URL}w500${movie.backdrop_path}`} alt={movie.original_title} />
        </div>
            <div className='movie-info-content'>
                <h3
                 style={{
                   display:'inline-block',
                   whiteSpace: 'nowrap',
                   overflow: 'hidden',
                   textOverflow: 'ellipsis',
                   maxWidth: '50ch'
                }}>
                  <span>Summery : </span> 
                  {movie.overview}</h3>
              <h3>
                <span>Release Date : </span> {movie.release_date}
              </h3>
              <h3>
                <span>Run Time : </span> {movie.runtime} min
              </h3>
              <h3>
                <span>Budget : </span> {movie.budget} $
              </h3>
              <h3>
                <span>Revenue:</span> {movie.revenue} $
              </h3>
             
                  
            </div>  

        </div>

      </>
    
    
        // <Descriptions>
        /* <Descriptions.Item label="Title">{movie.original_title}</Descriptions.Item>
        <Descriptions.Item label="release_date">{movie.release_date}</Descriptions.Item>
        <Descriptions.Item label="revenue">{movie.revenue}</Descriptions.Item>
        <Descriptions.Item label="runtime">{movie.runtime}</Descriptions.Item>
        <Descriptions.Item label="vote_average" span={2}>
        {movie.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="vote_count">{movie.vote_count}</Descriptions.Item>
        <Descriptions.Item label="status">{movie.status}</Descriptions.Item>
        <Descriptions.Item label="popularity">{movie.popularity}</Descriptions.Item> */
      // </Descriptions>
    )
}

export default MovieInfo
