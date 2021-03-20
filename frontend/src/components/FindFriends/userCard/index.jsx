import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listUsersAction } from '../../store/actions/listUsersAction';
import { UserCardContainer, ButtonContainer, GreyButton, Interests, GreyButtonSmall } from './style';


export default function UserCard() {

    const users = useSelector(state => state.usersReducer.users);
    console.log('users from UserCard:', users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listUsersAction());
    }, [])

    return (
        users.map((element, index) => {
            return (
                <UserCardContainer key={index}>
                    {console.log('Element from UserCardContainer:', element)}
                    <img width='100px' height='100px' src={element.avatar} alt='avatar'/>
                    <h2>{element.first_name} {element.last_name}</h2>
                    <p>{element.location}</p>
                    <ButtonContainer>
                        <GreyButton>FOLLOW</GreyButton>
                        <GreyButton>ADD FRIEND</GreyButton>
                    </ButtonContainer>
                    <p>{element.about_me}</p>
                    <Interests>
                        {element.things_user_likes.map((element, index) => {
                            return (
                                <GreyButtonSmall key={index}>
                                    {element}
                                </GreyButtonSmall>
                            )
                        })}
                        {/* <GreyButtonSmall>{element.things_user_likes[0]}</GreyButtonSmall> */}
                    </Interests>
                </UserCardContainer>
            )
        })
    )
}

