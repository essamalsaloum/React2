/**
 * Created by nasir on 16/07/2017.
 */
import React from 'react'
import './RadioButtonList.css'
import RadioButton from './RadioButton'
import PropTypes from 'prop-types'


export default class RadioButtonList extends React.Component {

  static propTypes = {
    theme: PropTypes.string,
    handleRadioChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    handleRadioChange: undefined
  }

  render() {
    return (
        <div className="RadioButtonList">
          <ul>
            <li>
              <RadioButton
                label="Classic"
                value="classic"
                onChange={this.props.handleRadioChange.bind(this)}
                checked={this.props.theme === 'classic'} />
            </li>
            <li>
              <RadioButton
                  label="Business"
                  value="business"
                  onChange={this.props.handleRadioChange.bind(this)}
                  checked={this.props.theme === 'business'} />
            </li>
            <li>
              <RadioButton
                  label="Hipster"
                  value="hipster"
                  onChange={this.props.handleRadioChange.bind(this)}
                  checked={this.props.theme === 'hipster'} />
            </li>
          </ul>
        </div>
    )
  }


}
