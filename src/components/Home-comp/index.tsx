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
import TextField from '@material-ui/core/TextField';
import {API_MAP} from '../../core/api-service/api.map';

type CompProps = {
  HomeData      : {
    data  : []
  };
  getHomeScreenData : (page : number, searchStr : string) => void;
  getRelatedData : (searchStr : string) => void;
}

type componentStateInterface = {
  isModalOpen   : boolean;
  modalData     : CardDataInterface;
}

let isApiFetching = false;

class HomeComponent extends React.Component<CompProps, componentStateInterface>{
  constructor(props: CompProps) {
    super(props);
    this.state = {
      isModalOpen   : false,
      modalData     : CardDataInitial
    }
  }

  componentDidMount() {
    this.props.getHomeScreenData(1, "");
  };

  componentDidUpdate(props:CompProps){
    window.addEventListener('scroll', function(e) {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight){
        return
      }else{
        let elemLength = (document.getElementsByClassName("stackQACard").length / 20)+1;
        props.getHomeScreenData(elemLength, "javascript");
      }
    });
  }

  handleSearchInput = (event :  React.ChangeEvent<HTMLInputElement>) =>{
    this.props.getRelatedData(event.target.value);
  }

  render() {
    return (
      <Wrapper>
        <Grid {...options.contRowCenterStart}>
          <Grid item xs={12} sm={11} lg={10} md={10} xl={10}>
              <Grid {...options.contRowCenterStart}>
                    <Grid item xs={12}>
                      <Grid {...options.contRowCenterStart}>
                        <Grid item xs={12} sm={8} md={6} lg={6} xl={6}>
                          <TextField
                              id="outlined-name"
                              label="Search.."
                              margin="normal"
                              variant="outlined"
                              fullWidth={true}
                              onChange={this.handleSearchInput}
                              />
                        </Grid>
                      </Grid>
                      {
                        this.props.HomeData.data.length ?
                          <TableView onClickRow={(data : CardDataInterface)=>this.openModal(data)} data={this.props.HomeData.data}/>
                        : <h1>No Data ...</h1>
                      }
                    </Grid>
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
  getHomeScreenData: (pagination : number, keyWord : string) => fetchQuestionAnswers(dispatch, pagination, keyWord),
  getRelatedData   : (keyWord : string) => fetchRelatedQuestionAnswers(dispatch, keyWord)
});

const fetchQuestionAnswers = (dispatch: Dispatch, pagination : number, keyWord : string) => {
  // if(!isApiFetching)
  //   isApiFetching = true;
  // else
  //   return;

  return fetchAPI({url : API_MAP.paginationDataAPI(pagination, keyWord)}).then(data => {
    dispatch({ type: HomeActions.setQuestionAnswers, data: data });
    isApiFetching = false;
    return data;
  });
}

const fetchRelatedQuestionAnswers = (dispatch: Dispatch, keyWord : string) => {
  // if(!isApiFetching)
  //   isApiFetching = true;
  // else
  //   return;


  return fetchAPI({url : API_MAP.relatedKeyDataAPI(keyWord)}).then(data => {
    dispatch({ type: HomeActions.setNewQuestionAnswers, data: data });
    isApiFetching = false;
    return data;
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);