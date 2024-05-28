import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class Navbar extends Component {
  state = {
    showMenu: false,
  }

  toggleMenu = () =>
    this.setState(prevState => ({showMenu: !prevState.showMenu}))

  closeMenu = () => this.setState({showMenu: false})

  render() {
    const {showMenu} = this.state
    const {match} = this.props
    const {path} = match
    const homeClassName = path === '/' ? 'link-name highlight' : 'link-name'
    const aboutClassName =
      path === '/about' ? 'link-name highlight' : 'link-name'

    return (
      <>
        <nav className="navbar-container">
          <div className="container">
            <Link to="/" className="img-link">
              <img
                src="https://res.cloudinary.com/dbweo4cmc/image/upload/v1625723673/COVID19INDIA_tvtxet.png"
                alt="logo"
                className="covid-logo"
              />
            </Link>

            <ul className="nav-items">
              <li key="1">
                <Link to="/" className="nav-home">
                  <button type="button" className={homeClassName}>
                    Home
                  </button>
                </Link>
              </li>

              <li key="2">
                <Link to="/about" className="nav-about">
                  <button type="button" className={aboutClassName}>
                    About
                  </button>
                </Link>
              </li>
            </ul>

            <button
              type="button"
              className="menu-button"
              onClick={this.toggleMenu}
            >
              <img
                className="addQueue"
                src="https://res.cloudinary.com/dbweo4cmc/image/upload/v1625949520/add-to-queue_1_n0hju7.png"
                alt="addQueue"
              />
            </button>
          </div>
        </nav>

        {showMenu ? (
          <ul className="nav-items">
            <li key="1">
              <Link to="/" className="nav-home">
                <button type="button" className={homeClassName}>
                  Home
                </button>
              </Link>
            </li>

            <li key="2">
              <Link to="/about" className="nav-about">
                <button type="button" className={aboutClassName}>
                  About
                </button>
              </Link>
            </li>

            <li className="close-item" key="2">
              <button
                type="button"
                className="close-button"
                onClick={this.closeMenu}
              >
                close
              </button>
            </li>
          </ul>
        ) : null}
      </>
    )
  }
}

export default withRouter(Navbar)
