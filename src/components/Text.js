import React from 'react';
import { Text } from 'react-native';
import { withTheme } from '../theme';


class Text_ extends React.Component {

    getSize = (size) => {
        const { theme } = this.props
        return theme.text[size] || { fontSize: size }
    }

    render() {

        const { size, color, weight, style, styles, ...props } = this.props

        return <Text style={[{
            ...this.getSize(size),
            fontFamily: 'JosefinSans-' + (weight || 'Regular'),
            color
        }, style]} {...props} />
    }
}

export default withTheme({}, Text_)