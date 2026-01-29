import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function NavBar(props) {

  const navbarClass = `navbar navbar-expand-lg ${
    props.mode === 'dark' ? 'navbar-dark custom-dark-navbar' : 'navbar-light bg-light'
  }`;

  return (
    <nav className={navbarClass}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>

          <div className="form-check form-switch text-nowrap me-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label">
              Enable {props.mode === 'dark' ? 'Light' : 'Dark'} Mode
            </label>
          </div>

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
}
