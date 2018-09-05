import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from '../theme';
import Box from './Box';
import Text from './Text';
import Touchable from './Touchable';


class Buttom extends React.Component {

    onPress = () => {
        setTimeout(this.props.onPress, 320)
    }

    render() {

        const { styles, style, flat, circle, children, onPress, theme, ...props } = this.props

        return flat ? (
            <Box
                style={[
                    styles.rootFlat, circle ? styles.rootCircle : undefined, style
                ]} {...props} centralize>
                <Touchable onPress={this.onPress} primary>
                    <Box style={circle ? styles.innerCircleFlat : styles.innerFlat} centralize>
                        {typeof children === 'string' ? <Text numberOfLines={1} style={styles.textFlat}>{children.toUpperCase()}</Text> : children}
                    </Box>
                </Touchable>
            </Box>
        ) : (
                <Box
                    style={[
                        styles.root, circle ? styles.rootCircle : undefined, style
                    ]} {...props} centralize>
                    <Touchable onPress={this.onPress}>
                        <Box style={circle ? styles.innerCircle : styles.inner} centralize>
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
        backgroundColor: theme.palette.Primary['500'].color
    },
    rootFlat: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: theme.palette.Primary['500'].color
    },
    rootCircle: {
        borderRadius: 192
    },
    inner: {
        padding: 8,
        paddingLeft: 24,
        paddingRight: 24
    },
    innerFlat: {
        padding: 6,
        paddingLeft: 22,
        paddingRight: 22
    },
    innerCircle: {
        padding: 8,
    },
    innerCircleFlat: {
        padding: 6,
    },
    text: {
        color: theme.palette.Primary['500'].text,
    },
    textFlat: {
        color: theme.palette.Primary['500'].color,
    }
})

export default withTheme(styles, Buttom)