import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Box extends React.Component {

    setNativeProps = (nativeProps) => {
        this.refs.root.setNativeProps(nativeProps)
    }

    render() {

        const {
            children,

            centralize,

            alignCenter,
            alignStart,
            alignEnd,
            alignStretch,

            justifyCenter,
            justifyStart,
            justifyEnd,
            justifySpaceAround,
            justifySpaceBetween,

            flex,
            column,
            fit,
            fitAbsolute,

            wrap,
            padding,

            style,
            
            ...anotherProps
        } = this.props

        const _styles = [styles.box]

        if (centralize) _styles.push(styles.centralize)
        if (alignCenter) _styles.push(styles.alignCenter)
        if (alignStart) _styles.push(styles.alignStart)
        if (alignEnd) _styles.push(styles.alignEnd)
        if (alignStretch) _styles.push(styles.alignStretch)
        if (justifyCenter) _styles.push(styles.justifyCenter)
        if (justifyStart) _styles.push(styles.justifyStart)
        if (justifyEnd) _styles.push(styles.justifyEnd)
        if (justifySpaceAround) _styles.push(styles.justifySpaceAround)
        if (justifySpaceBetween) _styles.push(styles.justifySpaceBetween)
        if (flex) _styles.push(styles.flex)
        if (column) _styles.push(styles.column)
        if (fit) _styles.push(styles.fit)
        if (fitAbsolute) _styles.push(styles.fitAbsolute)
        if (wrap) _styles.push(styles.wrap)
        if (padding) _styles.push(styles.padding)
        if (styles) _styles.push(style)

        return (
            <View style={_styles} ref="root" {...anotherProps}>
                {children}
            </View>
        )
    }
}

Box.propTypes = {
    centralize: PropTypes.bool,

    alignCenter: PropTypes.bool,
    alignStart: PropTypes.bool,
    alignEnd: PropTypes.bool,
    alignStretch: PropTypes.bool,

    justifyCenter: PropTypes.bool,
    justifyStart: PropTypes.bool,
    justifyEnd: PropTypes.bool,
    justifySpaceAround: PropTypes.bool,
    justifySpaceBetween: PropTypes.bool,

    flex: PropTypes.string,
    column: PropTypes.bool,
    fit: PropTypes.bool,
    fitAbsolute: PropTypes.bool,
    fitFixed: PropTypes.bool,

    wrap: PropTypes.bool,
    padding: PropTypes.bool,

    children: PropTypes.any,
    style: PropTypes.any,
}

const styles = StyleSheet.create({
    box: {
        position: 'relative',
        flexDirection: 'row',
    },
    centralize: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    alignCenter: {
        alignItems: 'center',
    },
    alignStart: {
        alignItems: 'flex-start',
    },
    alignEnd: {
        alignItems: 'flex-end',
    },
    alignStretch: {
        alignItems: 'stretch',
    },

    justifyCenter: {
        justifyContent: 'center',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    justifyEnd: {
        justifyContent: 'flex-end',
    },
    justifySpaceAround: {
        justifyContent: 'space-around',
    },
    justifySpaceBetween: {
        justifyContent: 'space-between',
    },

    column: {
        flexDirection: 'column',
    },
    fit: {
        flex: 1,
    },
    fitAbsolute: {
        position: 'absolute',
        top: 0, bottom: 0,
        left: 0, right: 0
    },

    wrap: {
        flexWrap: 'wrap'
    },
    padding: {
        padding: 16,
    }
})
