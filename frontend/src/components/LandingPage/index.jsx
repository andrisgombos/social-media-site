import React, {useState} from 'react';
import AppDownloader from './AppDownloader';
import SignIn from './SignIn';
import {LandingContainer} from '../../style/containers';
import SignUp from './SignUp';


export default function LandingPage() {

    
    const [toggle, setToggle] = useState('SignIn');
    const handleToggle = (e, componentToRender) => {
        e.preventDefault();
        setToggle(componentToRender)
    }


    return (
        <LandingContainer>
            {console.log('from handle toggle', toggle)}
            <AppDownloader />
            {(toggle === 'SignIn') 
            ? <SignIn toggle={'SignUp'} handleToggle={handleToggle}/> 
            : <SignUp handleToggle={handleToggle}/>}
        </LandingContainer>
    )
}
