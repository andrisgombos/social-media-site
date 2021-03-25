import React, {useState} from 'react';
import {RightContainer, RightHeader,FormContainer} from './styles'
import {PurpleButton, GreyButton} from '../../../../style/buttons';
import {InputContainer, MotionInput } from '../../../../style/inputs';
import mail_icon from '../../../../assets/logos_pictures_etc/svgs_selfmade/newenvelope.png';

export default function Registration(props) {

    const [signUpEmail, setEmail] = useState("");

    const signUpHandler = (e) =>{
        e.preventDefault();
        const credentials = {
            email: signUpEmail,
        }
        const url = "https://backpain.propulsion-learn.ch/backend/api/auth/registration/";
        const signUpConfig = {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: new Headers({
              "Content-Type": "application/json",
            })
        };
        fetch(url,signUpConfig)
        .then(res=>{
            return res.json()
        })
        .then(data => {
            console.log(data);
            props.nextStep()
        });
        
    }


    return (
        <RightContainer>
            <RightHeader>                
                <p>Already have an account?</p>
                <GreyButton onClick={(e) => props.handleToggle(e, 'SignIn')}> SIGN IN</GreyButton>
            </RightHeader>
            <FormContainer>
                <h1>Sign Up</h1>
                <form> 
                    <InputContainer>
                    <img src={mail_icon} alt="mail Icon"/>
                    <MotionInput                    
                    type='text' 
                    placeholder='Email-address'
                    value={signUpEmail}
                    onChange={(e)=>setEmail(e.target.value)}/>                
                    </InputContainer>
                </form>
                    <PurpleButton
                    style={{marginTop: '200px'}}
                    type='submit'
                     onClick={signUpHandler}
                    >CONTINUE</PurpleButton>
            </FormContainer>
        </RightContainer>
    )
}
