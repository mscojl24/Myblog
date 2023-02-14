import React, { useState } from 'react';

function Update({value,updateEvent}) {

    const [text, setText] = useState(value)

    const handleChangetext = (e) => {
        setText(e.target.value)
    };

    const handleClickBtn = (e) => {
        updateEvent({text})
    };

    return (

        <div className='reply'>
            <div className='reply__post_input'>
                <textarea placeholder='내용을 입력해주세요.' type='text' defaultValue={text} onChange={handleChangetext} />
                <button onClick={handleClickBtn}>수정</button>
            </div>
        </div>

    )
}

export default Update;