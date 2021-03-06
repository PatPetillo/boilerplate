import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link, NavLink } from 'react-router-dom';
import { logout } from '../store';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const { children } = props;

  return (
    <div>
      <h1>BoilerPlate</h1>
      <div>
        {
          <div>
            <NavLink to="/"><button>Home Page</button></NavLink>
          </div>
        }
      </div>
      {children}
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => ({ });

const mapDispatch = dispatch => ({});

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main));

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
