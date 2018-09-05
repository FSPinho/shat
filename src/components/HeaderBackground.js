import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from '../theme';
import Box from './Box';


class HeaderBackground extends React.Component {

    render() {
        const {styles, style, ...props} = this.props
        return (
            <Box style={[styles.root, style]} {...props}/>
        )
    }
}

const styles = (theme) => StyleSheet.create({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 56 * 2,
        backgroundColor: theme.palette.Primary['500'].color
    },
    
})

export default withTheme(styles, HeaderBackground)