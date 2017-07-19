/**
 * Created by nasir on 16/07/2017.
 */

import React from 'react'
import './ResultScreen.css'
import store from '../store'
import * as actions from '../actions/generateName'
import Button from '../components/Button'

export default class ResultScreen extends React.Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state.result)
    })
  }

  componentWillUnmount() {
    this.subscription.remove()
  }


  render() {
    return (
        <div className="ResultScreen">
          <h1>
            {this.state.companyName}
          </h1>

          <div className="App-backButton">
            <Button label="Go Back" onClick={() => actions.changePage('form-screen')}/>
          </div>
        </div>
    )
  }



}