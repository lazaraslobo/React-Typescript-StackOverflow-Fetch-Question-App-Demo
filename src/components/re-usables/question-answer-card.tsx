import React from 'react';
import {Wrapper} from './cards.styled';

export interface QAcompPropsInterface {
    tags    : []
    owner  : {}
}

const QuestionAnswerCard = (props : QAcompPropsInterface) =>{
    return (
        <Wrapper>
            <h2>i am card ......... </h2>
        </Wrapper>
    )
}

export {QuestionAnswerCard}