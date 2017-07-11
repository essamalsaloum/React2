import React, { Component } from 'react'
import {GeneratorForm, Button} from '../components'
import * as actions from '../actions'
import './FormScreen.css'

export default class FormScreen extends Component {

  render() {
    return (
      <div className="FormScreen">
      	<GeneratorForm className="FormScreen-form"/>

        <div className="FormScreen-buttons">
	        <Button
	          label="GENERATE"
	          onClick={this.onGenerateClick.bind(this)}
	        />
        </div>
      </div>
    )
  }

  onGenerateClick() {
    actions.generateName()
  }

}