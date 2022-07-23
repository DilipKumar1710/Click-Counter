import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  clickCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">
            The Button has been clicked
            <br />
            <snap className="counter"> {count} </snap> times
          </h1>
          <p className="description">Click the button to increase the count!</p>
          <div className="button-container">
            <button className="button" type="button" onClick={this.clickCount}>
              Click Me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
