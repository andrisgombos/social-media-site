import React from 'react'
import { MainContainer, GridContainer } from './style.js';
import UserCard from '../userCard'


export default function Main() {

    

    return (
        <MainContainer>
            <GridContainer>
                <UserCard />
            </GridContainer>
        </MainContainer>
    )
}
