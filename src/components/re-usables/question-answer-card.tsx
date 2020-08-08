import React from 'react';
import {Wrapper} from './cards.styled';
import {options} from '../Grid'
import {Grid} from '@material-ui/core';

export interface QAcompPropsInterface {
    tags    : []
    owner  : {}
}

const QuestionAnswerCard = (props : QAcompPropsInterface) =>{
    return (
        <Wrapper>
            <Grid {...options.contRowCenterStart} xs={12}>
                <h2>i am card ......... </h2>
            </Grid>
        </Wrapper>
    )
}

export {QuestionAnswerCard}