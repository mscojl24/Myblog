import React, { useState } from 'react';
import Post from './post.jsx';

function Memolist({ dummyPost,newpost,deleteEvent,updateEvent }) { 

    const [username, setUsername] = useState("")
    const [memo, setMemo] = useState("")
    const [icon, setIcon] = useState("https://i.imgur.com/uqyWEHw.png")


    const iconimg = ["https://i.imgur.com/uqyWEHw.png", "https://i.imgur.com/GBIyZf5.png", "https://i.imgur.com/uuZlAF9.png", "https://i.imgur.com/z5J7otb.png", "https://i.imgur.com/Adka0G5.png"];
    const iconname = ["icon_01", "icon_02", "icon_03", "icon_04", "icon_05"];

    const options = iconimg.map((iconimg, i) => {
        return <option key={iconimg+i} value={iconimg}>{iconname[i]}</option>
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

    const handleClickBtn = (e) => { // 버튼 클릭 시 상태끌어올리기 props로 내려준 newpost에 작성되어야 할 value 값을 인자로 넣어준다.
        
        if (memo === ''|| username === ''){
            alert('이름과 내용을 입력해주셔야 업로드가 가능해요!')
        } else {
            newpost({username:username,icon:icon,memo:memo}) // 키와 값이 같으면 같은단어로 축약할수있다 기억만 해두기
            setMemo('')
            setUsername('')
        }

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
                {dummyPost.map((el) => <Post key={el.id} posts={el} deleteEvent={deleteEvent} updateEvent={updateEvent}/>)} 
            </ul>
        </div>
    )
}

//dummyPost.length-1 === 생성된컴포넌트의 



export default Memolist;
