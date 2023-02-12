import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faReply } from "@fortawesome/free-solid-svg-icons";
import { faFolder,faCircleXmark } from "@fortawesome/free-regular-svg-icons";
//import { render } from '@testing-library/react';

function App() {

  return (
    <div className="App">
      <div className='App__sidebar'>
        <Sidebar />
      </div>
      <div className='App__main'>
        <Memolist />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <nav className="side_bar_section">
      <div className='side_bar_main'>
        <Profile />
        <Menu />
        <Submenu />
      </div>
      <div className='side_bar_footer'>
        <Footer />
      </div>
    </nav>
  )
}

function Profile() {
  return (

    <div id="user_profile">
      <div className="user_profile_img">
        <img src="https://i.imgur.com/C8pjaE6.png" alt="iconimage"/>
      </div>
      <div className="user_profile_textbox">
        <div className="user__name">JubeeCode</div>
        <div className="user__email">kimjubee@gmail.com</div>
      </div>
    </div>
  )
}

function Menu() {
  return (

    <div className='menu__sction'>
      <div className="menu_category_text">
        <p> MENU </p>
      </div>
      <ul className='menu__list'>
        <li><FontAwesomeIcon icon={faFolder} /> Memonote <div className='post__length'>0</div></li>
        <li><FontAwesomeIcon icon={faFolder} /> Html/css <div className='post__length'>0</div></li>
        <li><FontAwesomeIcon icon={faFolder} /> Javascript <div className='post__length'>0</div></li>
        <li><FontAwesomeIcon icon={faFolder} /> react <div className='post__length'>0</div></li>
        <li><FontAwesomeIcon icon={faFolder} /> Figma <div className='post__length'>0</div></li>
      </ul>
    </div>
  )
}

function Submenu() {
  return (

    <div className='menu__sction'>
      <div className="menu_category_text">
        <p> SUB </p>
      </div>
      <ul className='menu__list'>
        <li><FontAwesomeIcon icon={faFolder} /> Notice <div className='backgrund_red post__length'>0</div></li>
        <li><FontAwesomeIcon icon={faFolder} /> Codingtest <div className='backgrund_blue post__length'>0</div></li>
      </ul>
    </div>
  )
}


function Memolist() {
  
  const dummyPost = [];
  const [posts, setPost] = useState(dummyPost)
  const [username, setUsername] = useState("")
  const [memo, setMemo ] = useState("")
  const [icon, setIcon ] = useState("https://i.imgur.com/uqyWEHw.png")

  const icons = ["https://i.imgur.com/uqyWEHw.png","https://i.imgur.com/GBIyZf5.png","https://i.imgur.com/uuZlAF9.png","https://i.imgur.com/z5J7otb.png","https://i.imgur.com/Adka0G5.png"];
  const iconname = ["icon_01","icon_02","icon_03","icon_04","icon_05"];

  const options = icons.map((icons,i) => {
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
      content : memo,
      createdAt : new Date().toLocaleDateString('ko-kr'),
      like : 0,
    };

    if(username === "" || memo === ""){ alert("이름과 내용을 입력하지 않으면 작성이 안돼요!") }
    else {setPost([post, ...posts]); setUsername(""); setMemo("");}

  };

  

  return (

    <div className='memo_list_box'>
      <div className='memo__notice'>
        <span>🚨</span>
        <span className='notice__text'>이것은 공지사항입니다. 공지사항테스트.</span>
      </div>
      <div className='posting__box memo__notice'>
        <select onChange={handleIcon}>{options}</select>
        <input className='post_input' placeholder='닉네임' value={username} onChange={handleChangeName}/>
        <input className='post_input' placeholder='오늘의 이야기를 들려주세요' value={memo} onChange={handleChangeMemo}/>
        <button className='post_btn' onClick={handleClickBtn}> Submit </button>
      </div>
      <ul className='memo__list'>
        { posts.map((el) => <Post key={el.id} posts={el}/>) }
      </ul>
    </div>
  )
}


function Post({posts}) {

  const [count, setCount] = useState(0);
  const [star, setStar] = useState('☆')
  const [modal, setModal] = useState(false)
  const handleDel = () => { // 버튼 클릭 시 삭제
    let copy = [...posts];
    console.log(copy)
  };

  const likeBtn =() =>{
    posts.like = count;
    setCount(count + 1);
  }

  const starChange = () => {
    star === '★' ? setStar('☆') : setStar('★')
  }


  return(
  
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
      <span onClick={()=>{ setModal(!modal) }}><FontAwesomeIcon icon={faReply} /></span>
    </div>
  
      { modal === true ? <Reply /> : null}
  </li>
  
)}



function Reply () {


  const dummyReply = [];
  const [replys, setReplys] = useState(dummyReply)
  const [text, setText ] = useState("")
  const handleClickBtn = (e) => { // 버튼 클릭 시 리플 포스팅
    const re = {
      id: replys.length,
      username: '익명',
      content : text,
    };
    
    if(text === ""){ alert("어라? 덧글내용을 안쓰신듯...") }
    else {setReplys([re, ...replys]); setText("");}
  };

  const handleChangetext = (e) => {
    setText(e.target.value)
  };

  return(

    <div className='reply'>
      <div className='reply__post_input'>
        <input placeholder='내용을 입력해주세요.' type='text' value={text} onChange={handleChangetext}/>
        <button onClick={handleClickBtn}>SEND</button>
      </div>
        <ul>
          { replys.map((el) => <Replydata key={el.id} reply={el}/>) }
        </ul>
    </div>
  
  )
}


function Replydata ({reply}){

  return(
    <li className='reply__post_list'>
          <span>{reply.username}</span>
          <span>{reply.content}</span>
    </li>
  )
}


function Footer() {
  return (
    <div className='footer_text_box'>
      <input className='search_input' type={'search'} placeholder="🔍 Search" />
      <footer>Copyright 2023 by Jubee</footer>
    </div>
  )

}


export default App;