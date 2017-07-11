import React from 'react'
import './TextInput.css'

export default function TextInput(props) {
	const {onChange, ...other} = props

	return (
		<input
			type="text"
			className="TextInput"

			{...other}
			onChange={e => { onChange(e.target.value) }}
		/>
	)
}