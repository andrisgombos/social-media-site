import React, {useState} from 'react';
import { NewPostFormContainer, TopContainer, MiddleContainer, 
    BottomContainer, LeftBottom, RightBottom} from './style';
import {NewPostSend} from '../Feed/newpost/style'
import sendButton from '../../assets/logos_pictures_etc/svgs/send_button.svg';
// import uploadFile from '../../assets/logos_pictures_etc/svgs_selfmade/add_file.png';
// import uploadPhoto from '../../assets/logos_pictures_etc/svgs_selfmade/add_photo.png'
import {useDispatch} from 'react-redux';
import {listPostsAction} from '../../components/store/actions/listPostsAction';

export default function NewPostForm() {

    const [postContent, setPostContent] = useState({});
    const [postContentImg, setPostImageImg] = useState(null)
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();

    const newPostFormHandler = (event) =>  {
        event.preventDefault();
        const formData = new FormData();
        formData.append('images', postContentImg);
        formData.append('content', postContent);

        const url = "https://motion.propulsion-home.ch/backend/api/social/posts/";
        const config = {
            method: "POST",
            body: formData,
            headers: new Headers ({
                "Authorization": `Bearer ${token}`
            })
        }
        fetch(url, config)
        .then(res => res.json())
        .then(data => console.log(data))

        dispatch(listPostsAction());
    }

    return (
        <NewPostFormContainer >
            <TopContainer>
                <img alt='avatar'/>
                <textarea cols='50' rows='10' 
                placeholder="What's on your mind?"
                onChange={(e) => setPostContent(e.target.value)}/>
            </TopContainer>
            <MiddleContainer>
                <img alt='img' height='100px' src={postContentImg ?
                (window.URL || window.webkitURL).createObjectURL(postContentImg) : ''}/>
            </MiddleContainer>
            <BottomContainer>
                <LeftBottom>
                    <input onChange={(e) => setPostImageImg(e.target.files[0])}type='file' name='uploadImg'></input>
                    {/* <img height='16px' alt='' src={uploadPhoto}/> */}
                    {/* <img height='16px' alt='' src={uploadFile}/> */}
                </LeftBottom>
                <RightBottom>
                    <NewPostSend onClick={newPostFormHandler}><img src={sendButton} alt='send button' /></NewPostSend>
                </RightBottom>
            </BottomContainer>
        </NewPostFormContainer>
    )
}
