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

let isApiFetching = false;

class HomeComponent extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      isApiFetching   : false
    }
  }
  componentDidMount() {
    this.props.getHomeScreenData((20/4)+1);
  };

  componentDidUpdate(props:any){
    window.addEventListener('scroll', function(e) {
      // let elem = document.getElementById("scroller-element");
      // let windowOffset = window.pageYOffset;
      // let staticPageOffset = 5000;
      // if(elem){
      //   let elemLength = document.getElementsByClassName("stackQACard").length;
      //   let scrollerElemPosition = ( elemLength / 20) * staticPageOffset;
      //   if(windowOffset+650 == scrollerElemPosition){
      //     console.log("ISHOULD CALL BY NOW scroller elem at ", scrollerElemPosition-100, "win offset ", windowOffset);
      //     props.getHomeScreenData((elemLength/4)+1);
      //   }else{
      //     console.log("scroller elem at ", scrollerElemPosition-100, "win offset ", windowOffset);
      //   }
      // }
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        let elemLength = (document.getElementsByClassName("stackQACard").length / 20)+1;
        props.getHomeScreenData(elemLength);
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
  getHomeScreenData: (pagination : number) => fetchQuestionAnswers(dispatch, pagination)//dispatch({data : {test : "test"}, type : HomeActions.setQuestionAnswers})
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