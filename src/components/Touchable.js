import PropTypes from 'prop-types';
import React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { withTheme } from '../theme';


class Touchable extends React.Component {

    render() {

        const { primary, children, theme, styles, ...props } = this.props

        return (Platform.OS === 'android' && Platform.Version >= 21) ? (
            <TouchableNativeFeedback
                style={{ flex: 1 }}
                background={
                    TouchableNativeFeedback.Ripple(primary ? theme.palette.Primary['500'].color : theme.palette.White.Primary.color, true)
                }
                {...props}>
                {children}
            </TouchableNativeFeedback>
        ) : (
                <TouchableOpacity style={{ flexGrow: 1 }} {...props}>
                    {children}
                </TouchableOpacity>
            )
    }
}

Touchable.propTypes = {
    theme: PropTypes.any.isRequired,
    primary: PropTypes.bool
}

export default withTheme({}, Touchable)