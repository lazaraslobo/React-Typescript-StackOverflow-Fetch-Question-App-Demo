import React from 'react';
import {RootState} from '../../redux/reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  HomeData  : state.HOME_STATE,
});


class HomeComponent extends React.Component{
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