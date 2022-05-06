import React, { Component } from 'react';

class CurrentDateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
    console.log('1: Constructor is invoked')
  }

  // componentDidMount method gets triggerd after the ReactElement is mounted onto the DOM
  // side-effects go here
  componentDidMount() {
    console.log('3: Component did mount')
    this.intervalId = setInterval(() => {
      this.setState((state) => {
        return {
          date: new Date()
        }
      })
    }, 1000)
  }

  // triggered after component re-renders
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  // triggered before a component is removed from the DOM
  // Here you clean up side effects
  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.intervalId)
  }

  render() {
    console.log('2: Render invoked')
    return(
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default CurrentDateTime;