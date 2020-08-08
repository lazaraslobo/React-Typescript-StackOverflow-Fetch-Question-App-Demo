import React from 'react';
import {Dispatch, AnyAction} from 'redux'
import {RootState} from '../../core/redux/reducer';
import { connect } from 'react-redux';
import fetchAPI from '../../core/api-service';
import {HomeActions} from '../../core/redux/action.map';
import {Wrapper} from './Home.styled';
import {QuestionAnswerCard, QAcompPropsInterface} from '../re-usables/question-answer-card';
type HocProps = ReturnType<typeof mapStateToProps & typeof mapDispatchToProps>;

const FetchApiLoading = () => <h1>Fetching Stack API .... </h1>

class HomeComponent extends React.Component<any, any>{
  constructor(props : any){
    super(props);
  }
  componentDidMount(){
    this.props.getHomeScreenData();
  };
  render(){
    console.log("here ",this.props.HomeData.data.length);
    return(
      <Wrapper>
        {
          !this.props.HomeData.data.length ?
          <FetchApiLoading />
          :
           <>
           {
             this.props.HomeData.data.map((eachQA : QAcompPropsInterface ) => <QuestionAnswerCard {...eachQA}/>)
           }
           </>
        }
          </Wrapper>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    HomeData  : state.HOME_STATE,
});

const mapDispatchToProps = (dispatch : Dispatch<AnyAction>) =>({
    getHomeScreenData   :  () => fetchQuestionAnswers(dispatch)//dispatch({data : {test : "test"}, type : HomeActions.setQuestionAnswers})
});

const fetchQuestionAnswers = (dispatch : Dispatch<AnyAction>) =>{
  return fetchAPI().then(data =>{
    dispatch({type : HomeActions.setQuestionAnswers, data : data});
    return data;
  }); 
  console.log("here connecting ");
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);