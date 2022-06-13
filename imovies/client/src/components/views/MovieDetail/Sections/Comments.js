import React, { useState } from 'react'
import { Button, Input, Typography, } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';
import './section.css'
const { TextArea } = Input;
const { Title } = Typography;
function Comments(props) {
    const user = useSelector(state => state.user)
    const [Comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }

        const variables = {
            content: Comment,
            writer: user.userData._id,
            postId: props.postId
        }
        console.log(variables)

        axios.post('/api/comment/saveComment', variables)
            .then(response => {
                if (response.data.success) {
                    setComment("")
                    props.refreshFunction(response.data.result)
                } else {
                    alert('Failed to save Comment')
                }
            })
    }

    return (
        <>
        <div className='titleComments'>
        <span className='comment-tiret'></span> <h4>Comments</h4><span className='comment-tiret'></span> 
        </div>
        <div className='countainer-comments'>
            <br />
             {/* Root Comment Form */}
           
             <form  onSubmit={onSubmit}>
         
                <TextArea
                    style={{ color:'white' }}
                   className='area-comment' 
                    onChange={handleChange}
                    value={Comment}
                    placeholder="write some comments 🤗😀😉😯❤️"
                    rows={6}
                />
                <br />
                <Button className='btn-comment' onClick={onSubmit}>Submit</Button>
            </form>

            {/* Comment Lists  */}
            <div className='comment-list'>
            {console.log(props.CommentLists)}

            {props.CommentLists && props.CommentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <React.Fragment>
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                        <ReplyComment CommentLists={props.CommentLists} postId={props.postId} parentCommentId={comment._id} refreshFunction={props.refreshFunction} />
                    </React.Fragment>
                )
            ))}

            </div>
            {props.CommentLists && props.CommentLists.length === 0 &&
                <div className='comment-card'>
                   <p> Be the first one who shares your thought about this movie </p>
                </div>
            }

           
        </div>
        </>
    )
}

export default Comments
