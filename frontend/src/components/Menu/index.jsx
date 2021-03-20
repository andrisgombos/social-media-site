import React from 'react';
import { MenuContainer, ProfileButton, LogoutButton} from './style';
import logoutIcon from '../../assets/logos_pictures_etc/svgs_selfmade/logout.png';
import profileIcon from '../../assets/logos_pictures_etc/svgs_selfmade/profile_logo.png';
import { useHistory } from 'react-router-dom';

export default function Menu() {

    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        window.location.reload()
        history.push('/sign-in')
    }

    const history = useHistory()

    const goToProfile = () => {
        history.push('/profile')
    }

    return (
        <MenuContainer>
            <ProfileButton onClick={goToProfile}>
                <img alt='' src={profileIcon}/>
                <p>Profile</p>
            </ProfileButton>
            <LogoutButton onClick={logout}>
                <img alt='' src={logoutIcon}/>
                <p>Logout</p>
            </LogoutButton>
        </MenuContainer>
    )
}
