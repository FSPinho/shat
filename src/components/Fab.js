import PropTypes from 'prop-types';
import React from 'react';
import { Animated, Dimensions, Easing, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { withTheme } from '../theme';
import Box from './Box';
import Touchable from './Touchable';


class Fab extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fabMaxWidth: new Animated.Value(0),
            fabBounceTranslation: new Animated.Value(0),
            iconOpacity: new Animated.Value(0)
        }
    }

    componentWillReceiveProps({ animated }) {
        if (!this.props.animated && animated)
            this.doAnimateFab()
        else if (this.props.animated && !animated)
            this.doHideFabContent()
    }

    doAnimateFab = () => {
        Animated.parallel([
            Animated.timing(
                this.state.fabMaxWidth,
                { toValue: 1, duration: 800, easing: Easing.bezier(.8, .2, .2, .8) }
            ),
            Animated.sequence([
                Animated.timing(
                    this.state.iconOpacity,
                    { toValue: 0, duration: 400 }
                ),
                Animated.timing(
                    this.state.iconOpacity,
                    { toValue: 1, duration: 400 }
                ),
            ])
        ]).start()
    }

    doHideFabContent = () => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    this.state.fabMaxWidth,
                    { toValue: 0, duration: 800, easing: Easing.bezier(.8, .2, .2, .8) }
                ),
                Animated.sequence([
                    Animated.timing(
                        this.state.iconOpacity,
                        { toValue: 1, duration: 400 }
                    ),
                    Animated.timing(
                        this.state.iconOpacity,
                        { toValue: 0, duration: 400 }
                    ),
                ])
            ]),
        ]).start()
    }

    render() {

        const {
            style,
            styles,
            theme,
            color,
            icon,
            iconColor,
            onPress,
            animatedText,
            hoverPrimary,
        } = this.props

        const _styles = []
        _styles.push({
            backgroundColor: color || theme.palette.Primary['500'].color,
            borderRadius: 56 / 2,
            elevation: 4,
            margin: 8
        })

        return (
            <Animated.View
                style={[
                    style,
                    {
                        transform: [{
                            translateX: this.state.fabBounceTranslation.interpolate({
                                inputRange: [-1, 1],
                                outputRange: [-16, 10]
                            })
                        }],
                        maxWidth: this.state.fabMaxWidth.interpolate({
                            inputRange: [0, 1],
                            outputRange: [56, Dimensions.get('window').width - 32]
                        }),
                    },
                    _styles
                ]}>

                <Touchable onPress={onPress} primary={hoverPrimary}>
                    <Box style={styles.fabInner} centralize>
                        <Box fitAbsolute centralize>
                            <Animated.View style={{
                                opacity: this.state.iconOpacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 0]
                                })
                            }}>
                                <Icon name={icon} size={23} color={iconColor || theme.palette.White.Primary.color} />
                            </Animated.View>
                        </Box>

                        <Animated.View
                            style={{
                                opacity: this.state.iconOpacity,
                                paddingLeft: 16,
                                paddingRight: 16
                            }}>
                            <Box centralize>
                                <Text numberOfLines={2}
                                    style={{
                                        color: theme.palette.White.Primary.color,
                                        fontSize: 12,
                                        maxWidth: Dimensions.get('window').width - 64 - 56 - 16
                                    }}>
                                    {animatedText}
                                </Text>
                                <Icon style={{ marginLeft: 16 }} name={icon} size={23} color={theme.palette.White.Primary.color} />
                            </Box>
                        </Animated.View>
                    </Box>
                </Touchable>
            </Animated.View>
        )
    }
}

Fab.propTypes = {
    style: PropTypes.any,
    color: PropTypes.string,
    icon: PropTypes.string,
    animated: PropTypes.bool,
    animatedText: PropTypes.string,
    onPress: PropTypes.func
}

const styles = (theme) => StyleSheet.create({
    fabInner: {
        flex: 1,
        minWidth: 56,
        height: 56,
        borderRadius: 56 / 2
    },
    padding: {
        padding: 16
    }
})

export default withTheme(styles, Fab)