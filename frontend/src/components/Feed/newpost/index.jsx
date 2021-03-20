import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import {NewPostContainer, NewPostSend} from './style';
import alber from '../../../assets/logos_pictures_etc/images/users/alber.png';
import Modal from 'react-modal';
import sendButton from '../../../assets/logos_pictures_etc/svgs/send_button.svg';
import {listPostsAction} from '../../store/actions/listPostsAction';
import NewPostForm from '../../NewPostForm/'


export default function NewPost() {

    const [postContent, setPostContent] = useState({});
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    // const userName = useSelector(state => state.signInReducer.user.first_name)
    const userNameLocal = localStorage.getItem('user')

    const newPostHandler = (event) =>  {
        event.preventDefault();
        console.log('post content:', postContent);
        const url = "https://motion.propulsion-home.ch/backend/api/social/posts/";
        const content = {content: postContent}
        const config = {
            method: "POST",
            body: JSON.stringify(content),
            headers: new Headers ({
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            })
        }
        fetch(url, config)
        .then(res => res.json())
        .then(data => console.log(data))

        dispatch(listPostsAction());
    }


    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const customStyles = {
        content : {
            marginTop: '180px',
            marginLeft: '130px',
            height: '400px',
            width: '600px',
            backgroundColor: "white"
        },

        overlay : {
            backgroundColor: "rgba(0,0,0,0.8)"
        }
    };


    return (
        <>
        <NewPostContainer>
            <img src={alber} alt='avatar'  onClick={setModalIsOpenToTrue}/>
            <input
            type='text'
            onChange={(e) => setPostContent(e.target.value)}
            // value=''
            placeholder={`What's on your mind, ${userNameLocal}?`}  />
            <NewPostSend onClick={newPostHandler}><img src={sendButton} alt='send button' /></NewPostSend>
        </NewPostContainer>
        <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
        {/* <button onClick={setModalIsOpenToFalse}>x</button> */}
            <NewPostForm>
                
            </NewPostForm>
        </Modal>
        </>
    )
}


