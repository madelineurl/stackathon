import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div className="nav-container">
          {/* The navbar will show these links after you log in */}
          <div>
            <Link to="/about">About</Link>
            <Link to="/tutorial/info">Tutorial</Link>
            <Link to="/home">Play</Link>
          </div>
          <div>
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        </div>
      ) : (
        <div className="nav-container">
          {/* The navbar will show these links before you log in */}
          <div>
            <Link to="/about">About</Link>
            <Link to="/tutorial/info">Tutorial</Link>
            <Link to="/play">Play</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
