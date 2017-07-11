import React from 'react'
import './TextField.css'

export default function TextField(props) {
	const {onChange, ...other} = props

	return (
		<input
			type="text"
			className="TextField"

			{...other}
			onChange={e => { onChange(e.target.value) }}
		/>
	)
}