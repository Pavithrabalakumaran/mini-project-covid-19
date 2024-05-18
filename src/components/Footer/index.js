import {Component} from 'react'

import './index.css'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <h1 className="footer-logo">
          COVID19<span className="logo">INDIA</span>
        </h1>
        <p className="Footer-description">
          we stand with everyone fighting on the front lines
        </p>
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dqu21kv9o/image/upload/v1628956752/Vector_vw8bim.png"
            className="icon-style"
            alt="icon"
          />
          <img
            src="https://res.cloudinary.com/dqu21kv9o/image/upload/v1628956858/instagram_c9jeyi.png"
            className="icon-style"
            alt="icon"
          />
          <img
            src="https://res.cloudinary.com/dqu21kv9o/image/upload/v1628956939/Twitter_bird_logo_2012_1_cgourz.png"
            className="icon-style"
            alt="icon"
          />
        </div>
      </div>
    )
  }
}

export default Footer
