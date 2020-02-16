import React from 'react';
import { connect } from 'react-redux';

function Track({ track }) {
  return (<div>{track.name}</div>)
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    track: state.tracks.find(track => track.id === Number(ownProps.params.id))
  }
}

export default connect(mapStateToProps)(Track)