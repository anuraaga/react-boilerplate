/*
 *
 * ChildPage1
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


export class ChildPage1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('rendering child1');
    return (
      <div>
        Child1
      </div>
    );
  }
}

ChildPage1.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ChildPage1);
