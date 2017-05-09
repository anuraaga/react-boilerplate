/*
 *
 * ChildPage2
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


export class ChildPage2 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('rendering child2');
    return (
      <div>
        Child2
      </div>
    );
  }
}

ChildPage2.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ChildPage2);
