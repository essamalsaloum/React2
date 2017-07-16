import React from 'react'
import TextField from './TextField'
import store from '../store'
import './GeneratorForm.css'
import RadioButtonList from './RadioButtonList'

export default class GeneratorForm extends React.Component {

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
			<div className="GeneratorForm">
				<TextField
					label="1. What is your own name?"
					value={this.state.name}
					onChange={this.handleChange.bind(this, 'name')}
				/>
				<TextField
					label="2. What is your email?"
					value={this.state.email}
					onChange={this.handleChange.bind(this, 'email')}
				/>

				<RadioButtonList
						theme={this.state.theme}
						handleRadioChange={this.handleRadioChange.bind(this)}
				/>
			</div>
		)
	}

	handleChange(input, value) {
		const form = {...this.state}
		form[input] = value
		store.setState({form})
	}

	handleRadioChange(value) {
  		const form = {...this.state}
  		form['theme'] = value
	  store.setState({form})
	}

}