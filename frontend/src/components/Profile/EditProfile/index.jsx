import React, {useState} from 'react'
import { BottomButtons,InputContainer,Main,LeftSection,RightSection,Personal,Intrests } from './styles';
import {PurpleButton} from '../../../style/buttons'
import { MotionInput } from '../../../style/inputs';





export default function EditProfile() {


    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name,setLast_name] = useState("")
    const [location,setLocation]=useState("");
    const [about, setAbout]=useState("")
    const [things_user_likes, setThings_user_likes]=useState([ ]);
    

    const token = localStorage.getItem('token');




    const editProfileHandler = (e) => {
        e.preventDefault();
        const newDetails = {
            email : email,
            username: username,
            location: location,
            first_name: first_name,
            last_name: last_name,
            about: about,
            things_user_likes:things_user_likes
        }
        const editUrl = "https://motion.propulsion-home.ch/backend/api/users/me/";
        const config = {
            method: "PATCH",
            body: JSON.stringify(newDetails),
            headers: new Headers({
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            })
        }
        fetch(editUrl,config)
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
            });

    };



    return (
        <>
        <Main>
            <LeftSection>
                <img src={undefined} alt="profile"/>                
                <button>UPDATE PICTURE</button>
                <BottomButtons>
                <button style={{marginTop:"200px"}}>DELETE ACCOUNT</button>
                <PurpleButton type="submit" onClick={editProfileHandler} >SAVE</PurpleButton>
                </BottomButtons>
            </LeftSection>
            <RightSection>
               <form>
                   <section>
                        <Personal>
                            <InputContainer><MotionInput 
                                style={{margin:"10px"}}
                                    value= {undefined }
                                    type="text"
                                    placeholder="First Name"
                                    onChange={(e)=>setFirst_name(e.target.value)}               
                                    />          
                            </InputContainer>
                            <InputContainer><MotionInput 
                                style={{margin:"10px"}}
                                    value= {undefined }
                                    type="text"
                                    placeholder="Email"
                                    onChange={(e)=>setEmail(e.target.value)}               
                                    />          
                            </InputContainer>
                            
                            <InputContainer><MotionInput 
                                style={{margin:"10px"}}
                                    value= {undefined }
                                    type="text"
                                    placeholder="About"
                                    onChange={(e)=>setAbout(e.target.value)}               
                                    />          
                            </InputContainer>
                        </Personal>
                        <Personal>
                    <InputContainer><MotionInput 
                        style={{margin:"10px"}}
                            value= {undefined }
                            type="text"
                            placeholder="Last Name"
                            onChange={(e)=>setLast_name(e.target.value)}               
                            />          
                    </InputContainer>
                    <InputContainer><MotionInput 
                        style={{margin:"10px"}}
                            value= {undefined }
                            type="text"
                            placeholder="Username"
                            onChange={(e)=>setUsername(e.target.value)}               
                            />          
                    </InputContainer>
                    <InputContainer><MotionInput 
                                style={{margin:"10px"}}
                                    value= {undefined }
                                    type="text"
                                    placeholder="Location"
                                    onChange={(e)=>setLocation(e.target.value)}               
                                    />          
                            </InputContainer>
                   </Personal>
                   </section>
                   <Intrests>
                   <h3>things I like</h3>
                   <InputContainer><MotionInput 
                    style={{margin:"10px"}}
                        value= {undefined }
                        type="text"
                        placeholder="Food, Sports, Music, etc."
                        onChange={(e)=>setThings_user_likes(e.target.value)}               
                        />          
                   </InputContainer>

                   </Intrests>
                   </form>
                   
                   
                
                
            </RightSection>
        </Main>
            
        </>
    )
}

