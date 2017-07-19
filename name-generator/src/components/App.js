import React, { Component } from 'react'
import Header from './Header'
import store from '../store'
import './App.css'
import FormScreen from '../screens/FormScreen'
import ResultScreen from '../screens/ResultScreen'

class App extends Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove()
  }

  render() {

    let screen;
    switch (this.state.pageName) {
      case 'result-screen':
        screen = (<ResultScreen/>)
        break;
      default:
        screen = (<FormScreen/>)
        // default is 'form-screen'


    }

    return (
      <div className="App">
        <Header/>
        {screen}
      </div>
    )
  }


}

export default App