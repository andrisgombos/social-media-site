import React from 'react'
import { Header2Container, Header2Left, Header2Right } from './style.js';
import searchIcon from '../../../assets/logos_pictures_etc/svgs/search_icon.svg';



export default function index() {
    return (
        <Header2Container>
            <Header2Left>
                <img src={searchIcon} alt='search icon' />
                <input placeholder='Search posts...'/>
            </Header2Left>
            <Header2Right>
                <p>Liked</p>
                <p>Friends</p>
                <p>Follow</p>
            </Header2Right>
        </Header2Container>
    )
}
