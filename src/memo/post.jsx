import React, { useState } from 'react';
import Reply from './reply.jsx'
import Update from './update.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faReply } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function Post({ posts, deleteEvent, updateEvent }) {

    const [count, setCount] = useState(0);
    const [star, setStar] = useState('☆')
    const [modal, setModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)
    const [value, setValue] = useState('')
    const [postId, setPostId] = useState('')

    const handleDel = (e) => { 
        e.preventDefault();

        let postId = posts.id
        deleteEvent({ postId })
        
    };

    const hendleUpdate = (e) =>{
        setUpdateModal(!updateModal)
        setValue(posts.content)
        setPostId(posts.id)
    }

    const likeBtn = () => { posts.like = count; setCount(count + 1); }
    const starChange = () => { star === '★' ? setStar('☆') : setStar('★') }


    return (

        <li className='post__box'>
            <div className='post__user'>
                <img src={posts.picture} alt='iconimage' />
                <div>
                    <span className="user__name">{posts.username}</span>
                    <span className='post_date'>{posts.createdAt}</span>
                </div>
                <div className='post_Xmark' onClick={handleDel}><FontAwesomeIcon icon={faCircleXmark} /></div>
            </div>
            <div className='post__cuntents' >
                <p>
                    {posts.content}
                </p>
            </div>
            <div className='post_click_icon'>
                <span onClick={likeBtn}><FontAwesomeIcon icon={faHeart} /> {count}</span>
                <span onClick={starChange}>{star}</span>
                <span onClick={() => { setModal(!modal) }}><FontAwesomeIcon icon={faReply} /></span>
                <span onClick={hendleUpdate}>수정</span>
            </div>
            {updateModal === true ? <Update value={value} updateEvent={updateEvent} postId={postId} setUpdateModal={setUpdateModal}/> : null}
            {modal === true ? <Reply /> : null}
        </li>

    )
}


export default Post;