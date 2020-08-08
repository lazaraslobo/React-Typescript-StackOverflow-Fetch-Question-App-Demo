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

type HocProps = ReturnType<typeof mapStateToProps & typeof mapDispatchToProps>;

const FetchApiLoading = () => <h1>Fetching Stack API .... </h1>

class HomeComponent extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      isApiFetching   : false
    }
  }
  componentDidMount() {
    this.props.getHomeScreenData();
  };

  componentDidUpdate(props:any){
    window.addEventListener('scroll', function(e) {
      let elem = document.getElementById("scroller-element");
      let windowOffset = window.pageYOffset;
      let staticPageOffset = 5000;
      if(elem){
        let scrollerElemPosition = (document.getElementsByClassName("stackQACard").length / 20) * staticPageOffset;
        if(windowOffset > scrollerElemPosition - 100){
          props.getHomeScreenData();
          console.log("ISHOULD CALL BY NOW scroller elem at ", scrollerElemPosition, "win offset ", windowOffset);
        }else{
          console.log("scroller elem at ", scrollerElemPosition, "win offset ", windowOffset);
        }
      }
    });
  }


  render() {
    console.log("props ", this.props.HomeData.data);
    return (
      <Wrapper>
        <Grid {...options.contRowCenterStart}>
          <Grid item xs={12} sm={11} lg={10} md={10} xl={10}>
            {
              // !this.props.HomeData.data.length ?
              //   <FetchApiLoading />
              //   :
                <Grid {...options.contRowCenterStart}>
                  {
                    this.props.HomeData.data.map((eachQA: QAcompPropsInterface, index: number) => (
                      <Grid key={index} item xs={12} sm={9} lg={6} md={6} xl={6} className="stackQACard">
                        <QuestionAnswerCard {...eachQA} />
                      </Grid>
                    ))
                  }
                  <span id="scroller-element"></span>
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
  getHomeScreenData: () => fetchQuestionAnswers(dispatch)//dispatch({data : {test : "test"}, type : HomeActions.setQuestionAnswers})
});

const fetchQuestionAnswers = (dispatch: Dispatch<AnyAction>) => {
  return fetchAPI().then(data => {
    dispatch({ type: HomeActions.setQuestionAnswers, data: data });
    return data;
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);