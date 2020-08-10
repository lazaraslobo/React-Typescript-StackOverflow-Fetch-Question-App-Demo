import React from 'react';
import { Dispatch } from 'redux'
import { RootState } from '../../core/redux/reducer';
import { connect } from 'react-redux';
import fetchAPI from '../../core/api-service';
import { HomeActions } from '../../core/redux/action.map';
import { Wrapper } from './Home.styled';
import { QuestionAnswerCard } from '../re-usables/question-answer-card';
import {CardDataInterface, CardDataInitial} from '../data.comp.interfaces';
import { options } from '../Grid'
import { Grid } from '@material-ui/core';
import {Modal} from '../re-usables/modal'
import TableView from '../re-usables/table';

// type HocProps = typeof mapStateToProps & typeof mapDispatchToProps;

type MapStateProps = {
  HomeData      : {
    data  : []
  },
  getHomeScreenData : (page : number) => void
}

type stateInterface = {
  isModalOpen   : boolean,
  modalData     : CardDataInterface,
}

let isApiFetching = false;

class HomeComponent extends React.Component<MapStateProps, stateInterface>{
  constructor(props: MapStateProps) {
    super(props);
    this.state = {
      isModalOpen   : false,
      modalData     : CardDataInitial
    }
  }

  componentDidMount() {
    this.props.getHomeScreenData(1);
  };

  componentDidUpdate(props:MapStateProps){
    window.addEventListener('scroll', function(e) {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight){
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
              <Grid {...options.contRowCenterStart}>
                {
                  this.props.HomeData.data.length ?
                    <Grid item xs={12}>
                      <TableView onClickRow={(data : CardDataInterface)=>this.openModal(data)} data={this.props.HomeData.data}/>
                    </Grid>
                  : <h1>Still Fetching ....</h1>
                }
                <span className="scroller-element"></span>
              </Grid>
          </Grid>
        </Grid>
        <Grid {...options.contRowCenterStart}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Modal {...{isOpen : this.state.isModalOpen, handleClose : this.closeModal}}>
                <QuestionAnswerCard {...this.state.modalData} />
            </Modal>
          </Grid>
        </Grid>
      </Wrapper>)
  }
  
  closeModal = () =>{
    this.setState({...this.state, ...{isModalOpen : false}});
  }

  openModal = (modalData : CardDataInterface) : void =>{
    this.setState({isModalOpen : true, modalData})
  }
}

const mapStateToProps = (state: RootState) => ({
  HomeData: state.HOME_STATE,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getHomeScreenData: (pagination : number) => fetchQuestionAnswers(dispatch, pagination)
});

const fetchQuestionAnswers = (dispatch: Dispatch, pagination : number) => {
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