import React, {useEffect} from 'react';
import { PageContainer } from './style';
import {listPostsAction} from '../store/actions/listPostsAction';
import { useDispatch } from 'react-redux';
import Header1 from './header_1';
import Header2 from './header_2';
import Main from './main';
import {HeadersContainer} from './style'


export default function Feed(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        // start loading spinner here?
        dispatch(listPostsAction())
        // stop loading spinner here?
      },[]);


    return (
        <PageContainer>
            <HeadersContainer>
                <Header1 />
                <Header2 />
            </HeadersContainer>
            <Main />
        </PageContainer>
    )
}

