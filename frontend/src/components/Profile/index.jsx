// import { useEffect, useState } from "react";
import React from 'react';
import {TitleImage,Background} from './styles'
import Ttitle from '../../assets/logos_pictures_etc/images/title.jpg'
import PersonalInfo from '../Profile/PersonalInfo';
import UnknownPersonInfo from '../Profile/UnknownProfile'
import EditProfile from '../Profile/EditProfile'

import Header1 from '../Feed/header_1'


export default function ProfilePage ( ){
    return(
        <>
            <Header1/>
            <TitleImage>
                <img src={Ttitle} alt="title"/>
            </TitleImage>
        <Background>
            {/*  depending on what we ant to show, we render diferent components*/}
            {/* <PersonalInfo/> */}
            {/* <UnknownPersonInfo/> */}
            <EditProfile/>


        </Background>
        </>
    )
}
