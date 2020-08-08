import React from 'react';
import {RootState} from '../../core/redux/reducer';
import { connect } from 'react-redux';
import fetchAPI from '../../core/api-service';

const mapStateToProps = (state: RootState) => ({
  HomeData  : state.HOME_STATE,
});


class HomeComponent extends React.Component{
    componentDidMount(){
        fetchAPI();
    }
    render(){
        console.log("here ", this);
        return(
            <h1>hey</h1>
        )
    }
}

export default connect(
  mapStateToProps,
  null
)(HomeComponent);