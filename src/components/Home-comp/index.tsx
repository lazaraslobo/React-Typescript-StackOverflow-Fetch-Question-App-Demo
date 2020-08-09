import React from 'react';
import { Dispatch, AnyAction } from 'redux'
import { RootState } from '../../core/redux/reducer';
import { connect } from 'react-redux';
import fetchAPI from '../../core/api-service';
import { HomeActions } from '../../core/redux/action.map';
import { Wrapper, TableWrapper } from './Home.styled';
import { QuestionAnswerCard, QAcompPropsInterface } from '../re-usables/question-answer-card';
import { options } from '../Grid'
import { Grid } from '@material-ui/core';
import {Modal} from '../re-usables/modal'
// type HocProps = ReturnType<typeof mapStateToProps & typeof mapDispatchToProps>;

let isApiFetching = false;

class HomeComponent extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      isModalOpen   : false,
      modalData     : {}
    }
  }
  componentDidMount() {
    this.props.getHomeScreenData(1);
  };

  componentDidUpdate(props:any){
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
                    <this.RenderTableView data={this.props.HomeData.data}/>
                  : <h1>Still Fetching ....</h1>
                }
                <span className="scroller-element"></span>
              </Grid>
          </Grid>
        </Grid>
          <Grid item xs={12} sm={9} lg={6} md={6} xl={6} className="stackQACard">
            <Modal {...{isOpen : this.state.isModalOpen}}>
                <QuestionAnswerCard {...this.state.modalData} />
            </Modal>
          </Grid>
      </Wrapper>)
  }

  RenderTableView = (tableData : {data : []}) =>{
    console.log("incoming ", tableData);
    return (
      <TableWrapper>
        <table>
          <tr className="table-header">
            <th>Sl. No</th>
            <th>Author</th>
            <th>Title</th>
            <th>Creation Date</th>
          </tr>
          {
            tableData.data.map((eachElem : QAcompPropsInterface, index)=>
              <tr className="table-row-data" key={index} onClick={()=>this.setState({isModalOpen : true, modalData : eachElem})}>
                <td>{index+1}</td>
                <td>{eachElem.owner.display_name}</td>
                <td>{eachElem.title}</td>
                <td>{eachElem.creation_date}</td>
              </tr>
            )
          }
  
        </table>
      </TableWrapper>
    )
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

const OpenModal = ((modalValues : QAcompPropsInterface) => {
  return(
    <Modal {...{isOpen : true}}>
      <Grid item xs={12} sm={9} lg={6} md={6} xl={6} className="stackQACard">
        <QuestionAnswerCard {...modalValues} />
      </Grid>
    </Modal>
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);