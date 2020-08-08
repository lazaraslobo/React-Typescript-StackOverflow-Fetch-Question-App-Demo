import React from 'react';
import {Wrapper, ProfileImage, RichText, CardTitle, ViewCount} from './cards.styled';
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
                    <Grid item xs={3} sm={2} lg={2} md={2} xl={2}>
                        <ProfileImage src={props.owner.profile_image ? props.owner.profile_image : require("../../assets/user-profile.png")} alt={props.owner.display_name}/>
                    </Grid>
                    <Grid item xs={9}>
                        <RichText>{props.owner.display_name}</RichText>
                    </Grid>
            </Grid>
            <Grid {...options.contRowStartCenter}>
                    <CardTitle>``{props.title}``</CardTitle>
            </Grid>
            <Grid {...options.contRowStartCenter}>
                <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
                    <Grid {...options.contRowStartCenter}>
                        <Grid item xs={1}>
                            <span className="material-icons WT">people</span>
                        </Grid>
                        <Grid item xs={1}>
                            <RichText>{props.answer_count}</RichText>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <span className="material-icons WT">remove_red_eye</span>
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export {QuestionAnswerCard}