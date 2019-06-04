import React, { Component } from "react"
import classNames from "classnames"
import { translate } from "react-i18next"

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props)
    const { i18n } = this.props
    this.state = { language: i18n.language }

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language })
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props
    i18n.changeLanguage(lng)
  }

  
  render() {
    const languages = [
      { code: "en", label: "EN" },
      { code: "pl", label: "PL" },
    ]

    return (
      <li className="LanguageSwitcher">
        {/* {languages.map(language => this.renderLanguageChoice(language))} */}
        <span
          onClick={() => this.handleChangeLanguage('pl')}
          style={{
            cursor: 'pointer',
            color: this.state.language === 'pl' ? 'purple' : this.props.color,
          }}
        >
          PL
        </span>
        {' / '} 
        <span 
          onClick={() => this.handleChangeLanguage('en')}
          style={{
            cursor: 'pointer',
            color: this.state.language === 'en' ? 'purple' : this.props.color,
          }}
        >
          EN
        </span>
      </li>
    )
  }
}

export default translate()(LanguageSwitcher)