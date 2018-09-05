import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { withTheme } from '../theme';
import Box from './Box';
import Touchable from './Touchable';


class Buttom extends React.Component {

    render() {

        const { styles, style, flat, children, onPress, color, theme, ...props } = this.props

        return flat ? (
            <Box
                style={[
                    styles.root, { elevation: 0, backgroundColor: color || 'transparent' }, style
                ]} {...props} centralize>
                <Touchable onPress={onPress} primary>
                    <Box style={styles.inner} centralize>
                        {typeof children === 'string' ? <Text numberOfLines={1} style={styles.textFlat}>{children.toUpperCase()}</Text> : children}
                    </Box>
                </Touchable>
            </Box>
        ) : (
                <Box
                    style={[
                        styles.root, { backgroundColor: color || theme.palette.Primary['500'].color }, style
                    ]} {...props} centralize>
                    <Touchable onPress={onPress}>
                        <Box style={styles.inner} centralize>
                            {typeof children === 'string' ? <Text numberOfLines={1} style={styles.text}>{children.toUpperCase()}</Text> : children}
                        </Box>
                    </Touchable>
                </Box>
            )
    }
}

const styles = (theme) => StyleSheet.create({
    root: {
        ...theme.paper,
        borderRadius: 48,
        elevation: 2,
        height: 36
    },
    inner: {
        paddingLeft: 16,
        paddingRight: 16,
        height: 36
    },
    text: {
        color: theme.palette.Primary['500'].text
    },
    textFlat: {
        color: theme.palette.Black.Secondary.color
    }
})

export default withTheme(styles, Buttom)