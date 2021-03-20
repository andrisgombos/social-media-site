import React, {useEffect} from 'react';
import { PageContainer } from './style';
import {listUsersAction} from '../store/actions/listUsersAction';
import { useDispatch } from 'react-redux';
import Header1 from './header_1';
import Main from './main'


export default function Feed() {

    return (
        <PageContainer>
            <Header1 />
            <Main />
        </PageContainer>
    )
}

