import React from 'react';
import ReactLoading from 'react-loading';
import { ILoading } from '../../types/types';
import { Container } from './styles';


export const Loading = ({ type, color }: ILoading) => (
    <Container>
        <ReactLoading height={'5%'} width={'5%'} />
    </Container>
);
