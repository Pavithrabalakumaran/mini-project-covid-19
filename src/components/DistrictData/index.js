import {Component} from 'react'
import './index.css'

class DistrictData extends Component {
  componentDidMount() {
    this.getDistrictData()
  }

  getDistrictData = async () => {
    const response = await fetch('https://apis.ccbp.in/covid19-state-wise-data'),
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="districts-container">
        <h1 className="districts-heading">Top Districts</h1>
      </div>
    )
  }
}

export default DistrictData
