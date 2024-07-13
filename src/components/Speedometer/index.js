// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}
  onAccelerate = () => {
    this.setState((prevState) => (prevState.count < 200 ? ({ count: prevState.count + 10}) : ({ count: 200})))
  }
  onApplyBreak = () => {
    this.setState((prevState) => (prevState.count > 0 ? ({ count: prevState.count - 10}) : ({ count: 0})))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="speedometer"
        />
        <h1 className="speed">
          Speed is {count}mph
        </h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button-1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="button-2" onClick={this.onApplyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
