import React from 'react';
import {Wrapper, ProfileImage} from './cards.styled';
import {options} from '../Grid'
import {Grid} from '@material-ui/core';

export interface QAcompPropsInterface {
        "tags": [],
        "owner": { 
            "reputation": number,
            "user_id": number,
            "user_type": string,
            "profile_image": string,
            "display_name": string,
            "link":  string
        },
        "is_answered": false,
        "view_count": number,
        "answer_count": number,
        "score": number,
        "last_activity_date": number,
        "creation_date": number,
        "question_id": number,
        "content_license": string,
        "link": string,
        "title": string 
}


const QuestionAnswerCard = (props : QAcompPropsInterface) =>{
    return (
        <Wrapper>
            <Grid {...options.contRowStartCenter}>
                    <Grid item xs={2}>
                        <ProfileImage src={props.owner.profile_image ? props.owner.profile_image : require("../../assets/user-profile.png")} alt={props.owner.display_name}/>
                    </Grid>
                    <Grid item xs={8}>
                        <span>{props.owner.display_name}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <span>hi</span>
                    </Grid>
            </Grid>
        </Wrapper>
    )
}

export {QuestionAnswerCard}