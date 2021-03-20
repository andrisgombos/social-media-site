import React from 'react';
import {LeftContainer} from '../../../style/containers';
import {Top, Middle, SocialMedia, Copyright} from "../../../style/purpleContainer";
import  logoWhite from "../../../assets/logos_pictures_etc/images/logo_white.png";
import Apple from "../../../assets/logos_pictures_etc/svgs/apple.svg";
import Google from "../../../assets/logos_pictures_etc/svgs/google.svg"
import twitter from "../../../assets/logos_pictures_etc/svgs/twitter_icon.svg";
import facebook from "../../../assets/logos_pictures_etc/svgs/facebook_icon.svg";
import instagram from "../../../assets/logos_pictures_etc/svgs/instagram_icon.svg";




export default function AppDownloader() {
    return (
        <LeftContainer>
            
            <Top>
                {/* idealy the logo would be wrapped in a <Link> or an <a> and direct you to the feed page */}
                <img src={logoWhite} alt="logo"/>
                <h1>Motion</h1>
                <p>Conect with friends and the world around you in Motion</p>
            </Top>
            <Middle>
                <button> <img src={Apple} alt="Apple App Store"/> </button>
                <button> <img src={Google} alt="Google Play Store"/> </button>

            </Middle>
            <SocialMedia>
                <img src={twitter} alt="Twitter"/>
                <img src={facebook} alt="Facebook"/>
                <img src={instagram} alt="Instagram"/>
                                

            </SocialMedia>
            <Copyright>
                <p>copyright Motion 2018. All rights reserved.</p>
            </Copyright>


            
        </LeftContainer>
    )
}
