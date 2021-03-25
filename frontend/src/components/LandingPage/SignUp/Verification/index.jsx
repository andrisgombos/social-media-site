import React,{useState} from 'react';
import {PurpleButton} from '../../../../style/buttons';
import {RightContainer, FormContainer} from '../../../../style/containers';
import {  MotionInput } from '../../../../style/inputs';
import {InputContainer, Top,Main,Validation,LargeInput,SubInput} from './style'

export default function Verification(props) {
    //here we are setting the states for the properties we need 
    //in the Object
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [code, setCode] = useState("")
    const [password, setPassword] = useState("")
    const [password_repeat, setPassword_repeat] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name,setLast_name] = useState("")

    

    const varificationHandler = (e) => {
        e.preventDefault();
        const varificationCredentials = {
            email : email,
            username: username,
            code: code,
            password: password,
            password_repeat: password_repeat,
            first_name: first_name,
            last_name: last_name,
        }
        const varificationUrl = "https://backpain.propulsion-learn.ch/backend/api/auth/registration/validation";
        const config = {
            method: "PATCH",
            body: JSON.stringify(varificationCredentials),
            headers: new Headers({
                "Content-Type": "application/json",
            })
        }
        fetch(varificationUrl,config)
            .then((res)=>{
                console.log(res);
                return res.json;
            })
            .then(data=>{
                console.log(data);
                props.nextStep()
            });

    };
    // grab token and move to feed page
    // 




    return (
        <RightContainer>
            <FormContainer>
                <Top>
                <h1>Verification</h1>
                </Top>
                <form>
                <Main>
                    <Validation>
                    <InputContainer><MotionInput 
                    value={code}
                    onChange ={(e)=> setCode(e.target.value)}
                    placeholder ="Validation code" 
                    type='text'/></InputContainer>
                    </Validation>
                    <LargeInput>
                    <SubInput>
                   <InputContainer><MotionInput 
                    value={email}
                    onChange ={(e)=> setEmail(e.target.value)}
                    placeholder ="Email" 
                    type='text'/></InputContainer>
                   <InputContainer><MotionInput 
                    value={username}
                    onChange ={(e)=> setUsername(e.target.value)}
                    placeholder ="Username" 
                    type='text'/></InputContainer>
                   <InputContainer><MotionInput 
                    value={first_name}
                    onChange ={(e)=> setFirst_name(e.target.value)}
                    placeholder ="First ame" 
                    type='text'/></InputContainer>
                    </SubInput>
                    <SubInput>
                   <InputContainer><MotionInput 
                    value={last_name}
                    onChange ={(e)=> setLast_name(e.target.value)}
                    placeholder ="Last name" 
                    type='text'/></InputContainer>
                   <InputContainer><MotionInput 
                    value={password}
                    onChange ={(e)=> setPassword(e.target.value)}
                    placeholder ="Password" 
                    type='password'/></InputContainer>
                   <InputContainer><MotionInput 
                    value={password_repeat}
                    onChange ={(e)=> setPassword_repeat(e.target.value)}
                    placeholder ="Repeat password" 
                    type='password'/></InputContainer>
                    </SubInput>
                    </LargeInput>
                </Main>
                </form>
            
                <PurpleButton 
                style = {{marginTop:"100px"}}
                type= "submit"
                onClick={varificationHandler}
                >CONTINUE</PurpleButton>
            </FormContainer>
        
        </RightContainer>
    )
}
