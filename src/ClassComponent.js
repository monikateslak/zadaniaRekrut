import React, { Component } from 'react'

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Class Component</h1>
        <p>Click me {count} times</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Count + 1
        </button>
      </div>
    )
  }
}

export default ClassComponent