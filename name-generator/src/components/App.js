import React, { Component } from 'react'
import Header from './Header'
import GeneratorForm from './GeneratorForm'
import Button from './Button'
import store from '../store'
import './App.css'

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
    return (
      <div className="App">
        <Header/>

        <div className="App-generatorForm">
          <GeneratorForm/>
        </div>

        <div className="App-generateButton">
          <Button label="GENERATE" onClick={this.onGenerateClick.bind(this)}/>
        </div>
      </div>
    )
  }

  onGenerateClick() {
    alert('Generate')
  }

}

export default App