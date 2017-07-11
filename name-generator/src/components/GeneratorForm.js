import React from 'react'
import PropTypes from 'prop-types'
import {TextInput, RadioButtonList} from '.'
import './GeneratorForm.css'
import store from '../store'

export default class Form extends React.Component {

	static propTypes = {
		className: PropTypes.string
	}

	componentWillMount() {
		this.subscription = store.subscribe(state => {
			this.setState(state.form)
		})
	}

	componentWillUnmount() {
		this.subscription.remove()
	}

	render() {
		const {className} = this.props

		return (
			<div className={`GeneratorForm ${className || ''}`}>

				<FormRow label="1. What is your own name?">
					<TextInput
						value={this.state.ownName || ''}
						onChange={value => { this.update({ownName: value}) }}
					/>
				</FormRow>

				<FormRow label="2. Choose a theme">
					<RadioButtonList
						value={this.state.theme}
						choices={[
							{value: 'business', label: "Business-y"},
							{value: 'classic',  label: "Classic / French"},
							{value: 'hip',      label: "Hip"}
						]}
						onChange={value => { this.update({theme: value}) }}
					/>
				</FormRow>

			</div>
		)
	}

	update(newData) {
		const data = {...this.state}
		store.setState({form: {...data, ...newData}})
	}

}

export function FormRow({label, children}) {
	return (
		<div className="GeneratorForm-row">
			<div className="GeneratorForm-row-label">
				{label}
			</div>
			<div className="GeneratorForm-row-content">
				{children}
			</div>
		</div>
	)
}