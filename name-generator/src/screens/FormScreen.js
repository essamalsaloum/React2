/**
 * Created by nasir on 16/07/2017.
 */

import React from 'react'
import './FormScreen.css'
import GeneratorForm from '../components/GeneratorForm'
import Button from '../components/Button'
import * as actions from '../actions/generateName'
import store from '../store'

export default class FormScreen extends React.Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state.form)
    })
  }

  componentWillUnmount() {
    this.subscription.remove()
  }

  render() {
    return (
        <div className="FormScreen">
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
    actions.generateName(this.state)
    actions.changePage('result-screen')

  }

}
