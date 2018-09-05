import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Box from './Box';

const ICONS = {
    '1': '0041',
    '2': '0042',
    '3': '0043',
    '4': '0044',
    '5': '0045',
    '6': '0046',
    '7': '0047',
    '8': '0048',
    '9': '0049',
    '10': '004a',
    '11': '004b',
    '12': '004c',
    '13': '004d',
    '14': '004e',
    '15': '004f',
    '16': '0050',
    '17': '0051',
    '18': '0052',
    '19': '0053',
    '20': '0054',
    '21': '0055',
    '22': '0056',
    '23': '0057',
    '24': '0058',
    '25': '0059',
    '26': '005a',
    '27': '0061',
    '28': '0062',
    '29': '0063',
    '30': '0064',
    '31': '0065',
    '32': '0066',
    '33': '0067',
    '34': '0068',
    '35': '0069',
    '36': '006a',
    '37': '006b',
    '38': '006c',
    '39': '006d',
    '40': '006e',
    '41': '006f',
    '42': '0070',
    '43': '0071',
    '44': '0072',
    '45': '0073',
    '46': '0074',
    '47': '0075',
    '48': '0076',
    '49': '0077',
}

const SETS = {
    '1': [1, 2, 3, 4],
    '2': [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    '3': [20],
    '4': [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    '5': [36, 37, 38, 39],
    '6': [40, , 41, 42, 43, 44, 45, 46, 47, 48, 49]
}

const ROTATION = [
    -30, 0, 30
]

export default class CatIcon extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            icon: this.getIcon(props.set, props.icon),
            rotation: this.getRotation(props.rotation),
            inverse: ((Math.random() * 2) - 1) > 0 ? 1 : -1,
        }
    }

    componentWillReceiveProps({set, icon}) {
        // this.setState({
        //     ...this.state,
        //     icon: this.getIcon(set, icon)
        // })
    }

    getIcon = (_set, icon) => {
        const setKeys = ['1', '2', '3', '4', '5', '6']
        const set = _set || setKeys[parseInt(Math.random() * setKeys.length)]
        const setItems = SETS[set]
        const iconCode = ICONS[(icon || setItems[parseInt(Math.random() * setItems.length)]) + '']
        return String.fromCharCode(parseInt(iconCode, 16));
    }

    getRotation = (rotation) => {
        return (typeof rotation === 'number') ? rotation : ROTATION[parseInt(Math.random() * ROTATION.length)]
    }

    render() {

        const {
            size,
            color,
            rotation,
            set,
            icon,

            ...anotherProps
        } = this.props

        return (
            <Box centralize {...anotherProps}>
                <Text
                    style={[
                        {
                            fontSize: size,
                            color,
                            transform: [
                                { rotate: `${this.state.rotation}deg` },
                                { scaleX: this.state.inverse }
                            ]
                        },
                        styles.root,
                    ]}>

                    {this.state.icon}

                </Text>
            </Box>
        )
    }
}

CatIcon.propTypes = {
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            from: PropTypes.number.isRequired,
            to: PropTypes.number.isRequired,
        })
    ]),
    color: PropTypes.string,
    rotation: PropTypes.number,
    set: PropTypes.oneOf([
        '1', '2', '3', '4', '5', '6'
    ]),
    icon: PropTypes.number
}

CatIcon.defaultProps = {
    size: 24,
    color: '#000',
    rotation: undefined,
    set: undefined
}

const styles = StyleSheet.create({
    root: {
        fontFamily: 'CatIcons',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
