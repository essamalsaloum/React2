import React from 'react'
import './TextField.css'

export default function TextField(props) {
	const {onChange, invalid, ...other} = props

	return (
		<div className="TextField">
			<input
				type="text"
				className="TextField-input"

				{...other}
				onChange={e => { onChange(e.target.value) }}
			/>

			{invalid && <div className="TextField-invalid"/>}
		</div>
	)
}