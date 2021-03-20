import React, {useState} from 'react';
import { Header1Container, Header1Left, HeaderLeftA, HeaderLeftB, HeaderLeftC, Header1Right, HeaderRightA, HeaderRightB, HeaderRightC, } from './style.js';
import motionLogo from '../../../assets/logos_pictures_etc/images/logo.png';
import postsIcon from '../../../assets/logos_pictures_etc/images/posts_logo.png';
import friendsIcon from '../../../assets/logos_pictures_etc/svgs/icon-friends.svg';
// import jennifer from '../../../assets/logos_pictures_etc/images/users/jennifer.png';
import alber from '../../../assets/logos_pictures_etc/images/users/alber.png';
import menu from '../../../assets/logos_pictures_etc/svgs/menu.svg';
import bell from '../../../assets/logos_pictures_etc/svgs/notification_bell.svg';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import Menu from '../../Menu'


export default function Header1(props) {
    const history = useHistory();

    const goToFindFriends = () => {
        history.push('/find-friends');
    }

    const goToFeed = () => {
        history.push('/');
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    // const setModalIsOpenToFalse =()=>{
    //     setModalIsOpen(false)
    // }

    const customStyles = {
        content : {
            marginTop: '40px',
            marginLeft: '80vw',
            marginRight: '30px',
            height: '100px',
            width: '200px',
            backgroundColor: "white"
        },

        overlay : {
            backgroundColor: "rgba(0,0,0,0.0)"
        }
    };
    
    return (  
        <>  
        <Header1Container>
            {console.log('header1 props:', history)}
            <Header1Left>
                <HeaderLeftA>
                    <img src={motionLogo} alt='motion logo' />
                    <p>Motion</p>
                </HeaderLeftA>
                <HeaderLeftB onClick={goToFeed}>
                    <img src={postsIcon} alt='logo' />
                    <p>Posts</p>
                </HeaderLeftB>
                <HeaderLeftC onClick={goToFindFriends}>
                    <img src={friendsIcon} alt='logo' />
                    <p>Find Friends</p>
                </HeaderLeftC>
            </Header1Left>
            
            <Header1Right>
                <HeaderRightA>
                    <img src={bell} alt='motion logo' />
                </HeaderRightA>
                <HeaderRightB>
                    <img src={alber} alt='avatar' />
                </HeaderRightB>
                <HeaderRightC onClick={setModalIsOpenToTrue}>
                    <img src={menu} alt='motion logo' />
                </HeaderRightC>
            </Header1Right>

        </Header1Container>
        <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
            <Menu />
        </Modal>
        </>
    )
}



