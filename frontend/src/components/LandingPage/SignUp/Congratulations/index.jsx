import React from 'react'
import {PurpleButton} from '../../../../style/buttons';
import {RightContainer} from '../../../../style/containers';
import {Top,Middle} from './style';
import symbol from "../../../../assets/logos_pictures_etc/svgs_selfmade/approve_request.png"



// When the continue butten is clicked, this component needs to render 
// the Verification pagewith a counter 

export default function Congratulations(props) {
    return (
        <RightContainer>
            <Top>
                <h1>Congratulations</h1>
                <img  src={symbol} alt='symbole approved'/>
            </Top>
            <Middle>
            <p>We've sent a confirmation code to your email<br/>
            YOUR EMAIL</p>
            </Middle>
            <PurpleButton
            style={{marginTop: '50px'}}
            onClick={props.nextStep}
            >CONTINUE</PurpleButton>
        </RightContainer>
    )
}
