import React from 'react'
import PropTypes from 'prop-types'
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
					<input
						type="text"
						value={this.state.ownName || ''}
						onChange={e => { this.update({ownName: e.target.value}) }}
					/>
				</FormRow>

			</div>
		)
	}

	update(newData) {
		const {data} = this.props
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