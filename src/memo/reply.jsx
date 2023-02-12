import React, { useState } from 'react';

function Reply() {
    const dummyReply = [];
    const [replys, setReplys] = useState(dummyReply)
    const [text, setText] = useState("")
    const handleClickBtn = (e) => { // 버튼 클릭 시 리플 포스팅
        const re = {
            id: replys.length,
            username: '익명',
            content: text,
        };

        if (text === "") { alert("어라? 덧글내용을 안쓰신듯...") }
        else { setReplys([re, ...replys]); setText(""); }
    };

    const handleChangetext = (e) => {
        setText(e.target.value)
    };

    return (

        <div className='reply'>
            <div className='reply__post_input'>
                <input placeholder='내용을 입력해주세요.' type='text' value={text} onChange={handleChangetext} />
                <button onClick={handleClickBtn}>SEND</button>
            </div>
            <ul>
                {replys.map((el) => <Replydata key={el.id} reply={el} />)}
            </ul>
        </div>

    )
}

function Replydata({ reply }) {

    return (
        <li className='reply__post_list'>
            <span>{reply.username}</span>
            <span>{reply.content}</span>
        </li>
    )
}

export default Reply;