import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

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
                <img src="https://i.imgur.com/C8pjaE6.png" alt="iconimage" />
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
                <Link to="/"> <li><FontAwesomeIcon icon={faFolder} /> Memonote <div className='post__length'>0</div></li> </Link>
                <Link to="/xpage"> <li><FontAwesomeIcon icon={faFolder} /> Html/css <div className='post__length'>0</div></li> </Link>
                <Link to="/xpage"> <li><FontAwesomeIcon icon={faFolder} /> Javascript <div className='post__length'>0</div></li> </Link>
                <Link to="/xpage"> <li><FontAwesomeIcon icon={faFolder} /> react <div className='post__length'>0</div></li> </Link>
                <Link to="/xpage"> <li><FontAwesomeIcon icon={faFolder} /> Figma <div className='post__length'>0</div></li> </Link>
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
                <Link to="/"><li><FontAwesomeIcon icon={faFolder} /> Notice <div className='backgrund_red post__length'>0</div></li> </Link>
                <Link to="/xpage"><li><FontAwesomeIcon icon={faFolder} /> Codingtest <div className='backgrund_blue post__length'>0</div></li> </Link>
            </ul>
        </div>
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

export default Sidebar;
