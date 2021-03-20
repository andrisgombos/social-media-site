import React from 'react'
import { MainContainer, GridContainer } from './style.js';
import PostCard from '../postcard';
import NewPost from '../newpost'



export default function Main() {
    return (
        <MainContainer>
            <GridContainer>
                <NewPost />
                <PostCard />
            </GridContainer>
        </MainContainer>
    )
}
