import React, { useState } from 'react';
import Post from './post.jsx';

function Memolist() {

    const dummyPost = [];
    const [posts, setPost] = useState(dummyPost)
    const [username, setUsername] = useState("")
    const [memo, setMemo] = useState("")
    const [icon, setIcon] = useState("https://i.imgur.com/uqyWEHw.png")

    const icons = ["https://i.imgur.com/uqyWEHw.png", "https://i.imgur.com/GBIyZf5.png", "https://i.imgur.com/uuZlAF9.png", "https://i.imgur.com/z5J7otb.png", "https://i.imgur.com/Adka0G5.png"];
    const iconname = ["icon_01", "icon_02", "icon_03", "icon_04", "icon_05"];

    const options = icons.map((icons, i) => {
        return <option value={icons}>{iconname[i]}</option>
    });

    const handleIcon = (e) => { // 아이콘 선택박스
        setIcon(e.target.value)
    };

    const handleChangeName = (e) => { //유저이름 출력
        setUsername(e.target.value)
    };

    const handleChangeMemo = (e) => { //유저메모 출력
        setMemo(e.target.value)
    };

    const handleClickBtn = (e) => { // 버튼 클릭 시 포스팅
        const post = {
            id: posts.length,
            username: username,
            picture: icon,
            content: memo,
            createdAt: new Date().toLocaleDateString('ko-kr'),
            like: 0,
        };

        if (username === "" || memo === "") { alert("이름과 내용을 입력하지 않으면 작성이 안돼요!") }
        else { setPost([post, ...posts]); setUsername(""); setMemo(""); }

    };



    return (

        <div className='memo_list_box'>
            <div className='memo__notice'>
                <span>🚨</span>
                <span className='notice__text'>이것은 공지사항입니다. 공지사항테스트.</span>
            </div>
            <div className='posting__box memo__notice'>
                <select onChange={handleIcon}>{options}</select>
                <input className='post_input' placeholder='닉네임' value={username} onChange={handleChangeName} />
                <input className='post_input' placeholder='오늘의 이야기를 들려주세요' value={memo} onChange={handleChangeMemo} />
                <button className='post_btn' onClick={handleClickBtn}> Submit </button>
            </div>
            <ul className='memo__list'>
                {posts.map((el) => <Post key={el.id} posts={el} />)}
            </ul>
        </div>
    )
}


export default Memolist;
