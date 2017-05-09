/*
 *
 * ParentPage
 *
 */

import React, { PropTypes } from 'react';
import { Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AsyncRoute from 'routing/AsyncRoute';

import createChildPage1Loader from 'containers/ChildPage1/loader';
import createChildPage2Loader from 'containers/ChildPage2/loader';

export class ParentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static contextTypes = {
    store: React.PropTypes.object,
  };

  render() {
    console.log('rendering parent');
    const store = this.context.store;
    return (
      <div>
        Parent
        <Link to="/parent">parent</Link>
        <Link to="/parent/child1">child1</Link>
        <Link to="/parent/child2">child2</Link>
        <Switch>
          <AsyncRoute
            exact path="/parent/child1" load={createChildPage1Loader(store)}
          />
          <AsyncRoute
            exact path="/parent/child2" load={createChildPage2Loader(store)}
          />
        </Switch>
      </div>
    );
  }
}

ParentPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ParentPage);
