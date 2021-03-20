import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signInAction} from '../../store/actions/signInAction';
import {useHistory} from 'react-router-dom';
import {PurpleButton, GreyButton} from '../../../style/buttons'
import {InputContainer, MotionInput } from '../../../style/inputs';
import mailicon from '../../../assets/logos_pictures_etc/svgs_selfmade/newenvelope.png';
import passwordIcon from '../../../assets/logos_pictures_etc/svgs/password.svg'
import {RightContainer, RightHeader, FormContainer } from './style'

function SignIn(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const history = useHistory()

    const signInHandler = (e) => {
        e.preventDefault();
        const credentials = {
          email: email,
          password: password
        }
        dispatch(signInAction(credentials, history))
  };
    

    return (
        <RightContainer>
          <RightHeader>
            <p>Don't have an account?</p>
            <GreyButton onClick={(e) => props.handleToggle(e, props.toggle)}>SIGN UP</GreyButton>
          </RightHeader>
          <FormContainer>
          <h1>Sign In</h1>
          <form > 
              <InputContainer>
                <img src={mailicon} alt='Enter your email'/>
                <MotionInput 
                type='text' 
                placeholder='Email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}/>
              </InputContainer>
              <InputContainer>
              <img src={passwordIcon} alt='Enter your password'/>
              <MotionInput 
              type='password' 
              placeholder='Password'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}/>
              </InputContainer>
              {/* <Link to='/feed'><button type='submit'>SIGN IN</button></Link> */}
              {/* <input type='submit'/> */}
          </form>
              <PurpleButton 
              style={{marginTop: '200px'}}
              type='submit' 
              onClick={signInHandler}
              >SIGN IN
              </PurpleButton>
          </FormContainer>
        </RightContainer>
    )
}

export default SignIn;
