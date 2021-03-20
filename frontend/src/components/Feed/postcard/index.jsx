import React from 'react';
import {useSelector} from 'react-redux';
import { PostCardContainer, PostCardHeader, PostCardFooter,
Like, Share, PostContent } from './style';
import like from '../../../assets/logos_pictures_etc/svgs/heart.svg';
import share from '../../../assets/logos_pictures_etc/svgs/share.svg';
import moment from 'moment';
import heartWhite from '../../../assets/logos_pictures_etc/heart-outline.png';
import heartPurple from '../../../assets/logos_pictures_etc/heart-purple.png';

export default function PostCard() {

    const posts = useSelector(state => state.postsReducer.posts);
    

    const likePost = (id) => {
        const token = localStorage.getItem('token')
        const url = `https://motion.propulsion-home.ch/backend/api/social/posts/toggle-like/${id}/`
        const config = {
            method: 'POST',
            headers: new Headers ({
                'Authorization': `Bearer ${token}`
            })
        }
        fetch(url, config).then(res => res.json())
        .then(data => console.log(data))
    }

    return (
       posts.map((element, index) => {
           return (
            <PostCardContainer key={index}>
            {console.log(posts)}
            <PostCardHeader>
                <img height='30px' src={element.user.avatar} alt='avatar'/>
                <p>{`${element.user.first_name} ${element.user.last_name}`} <br/>
                {moment( element.created ).format('DD MMMM YYYY, hh:mm A')}</p>
                <p></p>
            </PostCardHeader>
            <PostContent>
                <p>{element.content}</p>
                {element.images.length ? element.images.map(img => {
                    return (
                        <img width='100px' height='100px' alt='' src={img.image}/>
                    )
                
                }): null}
            </PostContent>
            <PostCardFooter>
                <Like> 
                    {(!element.logged_in_user_liked) ? 
                <button onClick={() => likePost(element.id)}><img src={heartWhite} alt='like'/></button>
                : <button 
                onClick={() => likePost(element.id)}>
                    <img src={heartPurple} alt='like'/></button>}
                    
                    <p>Like</p>
                </Like>
                <Share>
                    <img src={share} alt='share'/>
                    <p>Share</p>
                </Share>
                <p>{`${element.amount_of_likes} likes`}</p>
            </PostCardFooter>
        </PostCardContainer>
           )
       })
    )
}

