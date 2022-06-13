import React, { useEffect, useState } from 'react'
import { Typography, Popover, Button } from 'antd';
import axios from 'axios';
import './favorite.css';
import { useSelector } from 'react-redux';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../Config'

const { Title } = Typography;

function FavoritePage() {
    const user = useSelector(state => state.user)

    const [Favorites, setFavorites] = useState([])
    const [Loading, setLoading] = useState(true)
    let variable = { userFrom: localStorage.getItem('userId') }

    useEffect(() => {
        fetchFavoredMovie()
    }, [])

    const fetchFavoredMovie = () => {
        axios.post('/api/favorite/getFavoredMovie', variable)
            .then(response => {
                if (response.data.success) {
                    console.log('succes data ',response.data.favorites , variable)
                    setFavorites(response.data.favorites)
                    setLoading(false)
                } else {
                    alert('Failed to get subscription videos')
                }
            })
    }

    const onClickDelete = (movieId, userFrom) => {

        const variables = {
            movieId: movieId,
            userFrom: userFrom,
        }

        axios.post('/api/favorite/removeFromFavorite', variables)
            .then(response => {
                if (response.data.success) {
                    fetchFavoredMovie()
                } else {
                    alert('Failed to Remove From Favorite')
                }
            })
    }


    const renderCards = Favorites.map((favorite, index) => {


     

        return <tr key={index}>

                <td>{favorite.movieTitle}</td>

            <td>{favorite.movieRunTime} mins</td>
            <td><button className='btn-favorite' style={{ width: '130.01px ',height: '52px', background: '#8a7de4' , color:'whitesmoke' , borderRadius:'10px' , border: 'none',    padding: '2%' }} onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}> Remove </button></td>
       </tr>
    })

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={1}  > Favorite Movies </Title>
            <hr />
            {user.userData && !user.userData.isAuth ?
                <div style={{ width: '100%', fontSize: '2rem', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <p>Please Log in first...</p>
                    <a href="/login">Go to Login page</a>
                </div>
                :
                !Loading &&
                <table >
                    <thead>
                        <tr>
                            <th>Movie Title</th>
                            <th>Movie RunTime</th>
                            <th>Remove </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCards}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default FavoritePage
