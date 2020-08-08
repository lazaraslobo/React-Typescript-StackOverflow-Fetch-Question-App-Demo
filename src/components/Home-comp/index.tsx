import React from 'react';
import { Dispatch, AnyAction } from 'redux'
import { RootState } from '../../core/redux/reducer';
import { connect } from 'react-redux';
import fetchAPI from '../../core/api-service';
import { HomeActions } from '../../core/redux/action.map';
import { Wrapper } from './Home.styled';
import { QuestionAnswerCard, QAcompPropsInterface } from '../re-usables/question-answer-card';
import { options } from '../Grid'
import { Grid } from '@material-ui/core';

// type HocProps = ReturnType<typeof mapStateToProps & typeof mapDispatchToProps>;

let isApiFetching = false;

class HomeComponent extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      window   : {}
    }
  }
  componentDidMount() {
    this.props.getHomeScreenData(1);
  };

  componentDidUpdate(props:any){
    window.addEventListener('scroll', function(e) {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight){
        console.log("window.innerHeight + document.documentElement.scrollTop ", window.innerHeight + document.documentElement.scrollTop);
        console.log("document.documentElement.offsetHeight ", document.documentElement.offsetHeight);
        return
      }else{
        let elemLength = (document.getElementsByClassName("stackQACard").length / 20)+1;
        props.getHomeScreenData(elemLength);
      }
    });
  }


  render() {
    return (
      <Wrapper>
        <Grid {...options.contRowCenterStart}>
          <Grid item xs={12} sm={11} lg={10} md={10} xl={10}>
            {
                <Grid {...options.contRowCenterStart}>
                  {
                    this.props.HomeData.data.map((eachQA: QAcompPropsInterface, index: number) => (
                      <Grid key={index} item xs={12} sm={9} lg={6} md={6} xl={6} className="stackQACard">
                        <QuestionAnswerCard {...eachQA} />
                      </Grid>
                    ))
                  }
                  <span className="scroller-element"></span>
                </Grid>
            }
          </Grid>
        </Grid>
      </Wrapper>)
  }
}

const mapStateToProps = (state: RootState) => ({
  HomeData: state.HOME_STATE,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  getHomeScreenData: (pagination : number) => fetchQuestionAnswers(dispatch, pagination)
});

const fetchQuestionAnswers = (dispatch: Dispatch<AnyAction>, pagination : number) => {
  if(!isApiFetching)
    isApiFetching = true;
  else
    return;

  return fetchAPI({page : pagination}).then(data => {
    dispatch({ type: HomeActions.setQuestionAnswers, data: data });
    isApiFetching = false;
    return data;
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);