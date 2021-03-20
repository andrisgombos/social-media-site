import React ,{useState} from 'react';
import {RightContainer} from '../../../style/containers';
import Registration from './Registration';
import Congratulations from './Congratulations';
import Verification from './Verification';
import SignIn from '../SignIn'




export default function SignUp(props) {

    const [step, setStep] = useState(0);

    const nextStep = (e) => {
        setStep(step + 1)
    }
    

    // "Continue"button will call signUpHandler-function---
    // this function makes a post to the api with the email-ardess---
    // the api will then send an email with the code nessesary to complete---
    // the registration 



    return (
        <RightContainer>
          {step === 0 ? <Registration nextStep={nextStep} handleToggle={props.handleToggle}/> : null }   
          {step === 1 ? <Congratulations nextStep={nextStep}/> : null}
          {step === 2 ? <Verification nextStep={nextStep}/> : null}
          {step === 3 ? <SignIn step={step}
          nextStep={nextStep}
          toggle={'SignUp_'}
          handleToggle={props.handleToggle}/> : null}
        </RightContainer>
    )
}
