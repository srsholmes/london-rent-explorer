import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions';
import MapContainer from '../components/MapContainer'

export default class App extends Component {
  render(){
    return (
      <div>
        <MapContainer />
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    heading: state.heading
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
