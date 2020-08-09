import React from 'react';
import {Wrapper, ProfileImage, RichText, CardTitle, VisitContent} from './cards.styled';
import {options} from '../Grid'
import {Grid} from '@material-ui/core';
import {CardDataInterface} from '../data.comp.interfaces';

interface interfaceBar{
    iconName    :  string
    text        ?: string|number 
}

const CreateQaInfoBar = (barProps : interfaceBar) =>{
    return (
        <Grid item xs={3} sm={3} md={4} lg={3} xl={3}>
            <Grid {...options.contRowStartCenter}>
                <Grid item xs={3}>
                    <span className="material-icons WT">{barProps.iconName}</span>
                </Grid>
                <Grid item xs={3}>
                    <RichText>{barProps.text}</RichText>
                </Grid>
            </Grid>
        </Grid>
    )
}

const QuestionAnswerCard = (props : CardDataInterface) =>{
    return (
        <Wrapper className="QuestionAnswerCard">
            <Grid {...options.contRowStartCenter}>
                <Grid item xs={3} sm={2} lg={2} md={2} xl={2}>
                    <ProfileImage src={props.owner.profile_image ? props.owner.profile_image : require("../../assets/user-profile.png")} alt={props.owner.display_name}/>
                </Grid>
                <Grid item xs={9}>
                    <RichText>{props.owner.display_name}</RichText>
                </Grid>
                <Grid item>
                    <span className="material-icons WT">more_vert</span>
                </Grid>
            </Grid>
            <Grid {...options.contRowStartCenter}>
                <CardTitle>``{props.title}``</CardTitle>
            </Grid>
            <Grid {...options.contRowStartCenter} className="QAinfoPanel">
                <CreateQaInfoBar {...{iconName : "comment", text : props.answer_count}}/>
                <CreateQaInfoBar {...{iconName : "remove_red_eye", text : props.view_count}}/>
                <CreateQaInfoBar {...{iconName : props.is_answered ? 'check_circle' : 'close'}}/>
                <a href={props.link} target="_blank">
                    <VisitContent>Visit</VisitContent>
                </a>
            </Grid>
            {
                props.tags.length ?
                    <Grid {...options.contRowStartCenter}>
                        <RichText><b>Tags&nbsp;-&nbsp;</b></RichText>
                        {
                            props.tags.map((eachElem : string, index : number)=>
                                <RichText key={index}>{eachElem},&nbsp;&nbsp;</RichText>
                            )
                        }
                    </Grid>
                :   null
            }
        </Wrapper>
    )
}

export {QuestionAnswerCard}