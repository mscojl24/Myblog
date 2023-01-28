import React from 'react';
import './App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

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
        <img src="https://i.imgur.com/C8pjaE6.png" />
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

  return (

    <div className='memo_list_box'>
      <div className='memo__notice'>
        <span>🚨</span>
        <span className='notice__text'>이것은 공지사항입니다. 공지사항테스트.</span>
      </div>
      <div className='posting__box memo__notice'>
        <select name="icon">
            <option value="">Select icon</option>
            <option value="icon1">icon_01</option>
            <option value="icon2">icon_02</option>
            <option value="icon3">icon_03</option>
            <option value="icon4">icon_04</option>
        </select>
        <input className='post_input' placeholder='닉네임'/>
        <input className='post_input' placeholder='오늘의 이야기를 들려주세요'/>
      </div>
      <ul className='memo__list'>
        <Post />
        <Post2 />
        <Post />
        <Post3 />
        <Post />
        <Post />

      </ul>
    </div>
  )
}

function Post() {
  return(
  
  <li className='post__box'>
    <div className='post__user'>
      <img src="https://i.imgur.com/C8pjaE6.png" alt='iconimage' />
      <div>
        <span className="user__name">JUBEE</span>
        <span className='post_date'>23.01.27</span>
      </div>
    </div>
    <div className='post__cuntents'>
      <p>
        여기에 내용이 들어갑니다.
      </p>
    </div>
    <div className='post_click_icon'>
      <span><FontAwesomeIcon icon={faHeart} /> 1</span>
      <span>☆</span>
    </div>
    <div></div>
  </li>
  
)}


function Post2() {
  return(
  
  <li className='post__box'>
    <div className='post__user'>
      <img src="https://i.imgur.com/C8pjaE6.png" alt='iconimage' />
      <div>
        <span className="user__name">JUBEE</span>
        <span className='post_date'>23.01.27</span>
      </div>
    </div>
    <div className='post__cuntents'>
      <p>
      여기에 내용이 들어갑니다. 여기에 내용이 들어갑니다. 여기에 내용이 들어갑니다. 여기에 내용이 들어갑니다. 여기에 내용이 들어갑니다. 여기에 내용이 들어갑니다. 여기에 내용이 들어갑니다. 여기에 내용이 들어갑니다. 여기에 내용이 들어갑니다. 여기에 내용이 들어갑니다. 
      </p>
    </div>
    <div className='post_click_icon'>
      <span><FontAwesomeIcon icon={faHeart} /> 0</span>
      <span>☆</span>
    </div>
    <div></div>
  </li>
  
)}


function Post3() {
  return(
  
  <li className='post__box'>
    <div className='post__user'>
      <img src="https://i.imgur.com/C8pjaE6.png" alt='iconimage' />
      <div>
        <span className="user__name">JUBEE</span>
        <span className='post_date'>23.01.27</span>
      </div>
    </div>
    <div className='post__cuntents'>
      <p>
      여기에 내용이 들어갑니다.여기에 내용이 들어갑니다.여기에 내용이 들어갑니다.여기에 내용이 들어갑니다.
      </p>
    </div>
    <div className='post_click_icon'>
      <span><FontAwesomeIcon icon={faHeart} /> 1</span>
      <span>☆</span>
    </div>
    <div></div>
  </li>
  
)}

function Footer() {
  return (
    <div className='footer_text_box'>
      <input className='search_input' type={'search'} placeholder="🔍 Search" />
      <footer>Copyright 2023 by Jubee</footer>
    </div>
  )

}


export default App;