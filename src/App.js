import React from 'react';
import { connect } from 'react-redux';

function App() {
  return (
    <div>

    </div>
  );
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);
