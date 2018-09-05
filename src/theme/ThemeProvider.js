import React, {Component} from 'react'
import PropTypes from 'prop-types'

import DefaultTheme from './Theme'


class ThemeProvider extends Component {
    getChildContext() {
        return {theme: this.props.theme}
    }

    render() {
        return this.props.children
    }
}

ThemeProvider.childContextTypes = {
    theme: PropTypes.any,
}

ThemeProvider.propTypes = {
    theme: PropTypes.any,
}

ThemeProvider.defaultProps = {
    theme: DefaultTheme,
}

export default ThemeProvider