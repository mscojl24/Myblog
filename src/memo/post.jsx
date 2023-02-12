import React, { useState } from 'react';
import Reply from './reply.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faReply } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function Post({ posts }) {

    const [count, setCount] = useState(0);
    const [star, setStar] = useState('☆')
    const [modal, setModal] = useState(false)

    const handleDel = () => { // 버튼 클릭 시 삭제
        let copy = [...posts];
        console.log(copy)
        };

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
            <div className='post__cuntents'>
                <p>
                    {posts.content}
                </p>
            </div>
            <div className='post_click_icon'>
                <span onClick={likeBtn}><FontAwesomeIcon icon={faHeart} /> {count}</span>
                <span onClick={starChange}>{star}</span>
                <span onClick={() => { setModal(!modal) }}><FontAwesomeIcon icon={faReply} /></span>
            </div>
            {modal === true ? <Reply /> : null}
        </li>

    )
}


export default Post;