import React from 'react';
import {Dispatch, AnyAction} from 'redux'
import {RootState} from '../../core/redux/reducer';
import { connect } from 'react-redux';
import fetchAPI from '../../core/api-service';
import {HomeActions} from '../../core/redux/action.map';

type HocProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;


class HomeComponent extends React.Component<any, any>{
  componentDidMount(){
    // fetchAPI();
  };
  render(){
        console.log("here ", this);
        return(
          <>
            <h1>hey</h1>
            <button onClick={this.props.getHomeScreenData}>fetch</button>
          </>
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
  fetchAPI().then(data =>{
    dispatch({type : HomeActions.setQuestionAnswers, data : data});
  }); 
  console.log("here connecting ");
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);