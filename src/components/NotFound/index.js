import './index.css'

const Notfound = () => (
  <div className="notfound-container">
    <img
      src="https://res.cloudinary.com/dqu21kv9o/image/upload/v1629188949/Group_7484_wthzbs.png"
      className="not-found-image"
      alt="notfound"
    />
    <h1 className="notfound-heading">PAGE NOT FOUND</h1>
    <p className="notfound-description">
      we’re sorry, the page you requested could not be found <br /> Please go
      back to the homepage
    </p>
    <a href="/">
      <button type="button" className="button-style">
        Home
      </button>
    </a>
  </div>
)

export default Notfound
