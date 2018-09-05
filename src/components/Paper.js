import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from '../theme';
import Box from './Box';


class Paper extends React.Component {

    setNativeProps = (nativeProps) => {
        this.refs.root.setNativeProps(nativeProps)
    }

    render() {

        const {padding, children, style, styles, ...props} = this.props

        const _styles = []

        _styles.push(styles.root)

        if (padding)
            _styles.push(styles.padding)

        _styles.push(style)

        return (
            <Box ref="root" style={_styles} column {...props}>
                {children}
            </Box>
        )
    }
}

Paper.propTypes = {
    padding: PropTypes.bool,

    children: PropTypes.any,
    style: PropTypes.any,
}

const styles = (theme) => StyleSheet.create({
    root: {
        position: 'relative',
        padding: 0,

        ...theme.paper
    },
    padding: {
        padding: 16
    }
})

export default withTheme(styles, Paper)