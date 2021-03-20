import React from 'react'
import {Main,LeftSection,RightSection,RightTop,RightBottom,AboutMe,Text,Interests,ContactInfo } from './styles';


export default function PersonalInfo(props) {

    

    //




    return (
        <>
        <Main>
            <LeftSection>
                <img src={undefined} alt="profile"/>
                <h2>Firstname Lastname</h2>
                <p>city, country</p>
                <button>edit profile</button>
            </LeftSection>
            <RightSection>
                <RightTop>
                    <AboutMe>
                        <Text>
                            <p>About</p><br/>
                            <p>Text, coming from a different component</p>
                        </Text>
                        <ContactInfo>
                            <div><h3>Email</h3><p>Email</p></div>
                            <div><h3>Phone</h3><p>Phonenumer</p></div>
                        </ContactInfo>
                    </AboutMe>
                    <Interests>
                        <p>things i like</p>
                    </Interests>
                </RightTop>
                <RightBottom>
                    <p>statistics likes posts etc</p>
                </RightBottom>
            </RightSection>
        </Main>


        </>
        
    )
}
