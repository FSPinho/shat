import React from 'react';
import { View } from 'react-native';
import { withTheme } from '../theme';


class Buttom extends React.Component {

    render() {

        const { large, vertical, ...props } = this.props

        return (<View style={{
            [vertical ? 'height' : 'width']: large ? 32 : 16
        }} {...props} />)
    }
}

export default withTheme({}, Buttom)