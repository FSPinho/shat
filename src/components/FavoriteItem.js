import React from 'react';
import { translate } from 'react-i18next';
import { Animated, Dimensions, Easing, Image, StyleSheet, Text, View } from 'react-native';
import ViewOverflow from 'react-native-view-overflow';
import AsyncStorage from 'redux-persist-filesystem-storage';
import { Box } from '../components';
import FoldView from '../components/FoldView';
import Touchable from '../components/Touchable';
import { metadata } from '../constants/candidates';
import { Alert } from '../services';
import { withTheme } from '../theme';
import Fab from './Fab';

class FavoriteItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            expanded: false,
            fabTop: new Animated.Value(16)
        }
    }

    doMoveFabUp = async () => {
        Animated.timing(
            this.state.fabTop, {
                toValue: 16,
                easing: Easing.bezier(.8, .2, .2, .8)
            }
        ).start()
    }

    doMoveFabDown = async () => {
        Animated.timing(
            this.state.fabTop, {
                toValue: 72,
                easing: Easing.bezier(.8, .2, .2, .8)
            }
        ).start()
    }

    doRemoveFromFavorites = async (f) => {
        try {
            await Alert.ask(this, this.props.t('delete-favorite', { name: f.name }))
            console.log('FavoriteItem:doRemoveFromFavorites - Removing from favorites...')
            await AsyncStorage.removeItem('c:favorite:' + f.number)
            this.setState({ ...this.state, favorite: false })
            Alert.showText(this.props.t('remove-favorite'))
        } catch (error) {
            // Alert.showLongText(this.props.t('cant-remove-favorite'))
            console.warn('FavoriteItem:doRemoveFromFavorites - can\'t remove from favorites:', error)
        }
    }

    render() {

        const { expanded } = this.state
        const { styles, t, theme, favorite: f } = this.props

        return (
            <Box column>
                <FoldView
                    expanded={expanded}
                    isLast={false}
                    front={
                        <View style={styles.cardfront}>
                            <Box padding alignItems="center">

                                <Animated.View style={styles.candidateAvatarWrapper}>
                                    <Image style={styles.candidateAvatar}
                                        source={{
                                            uri: f.photo
                                        }} />
                                </Animated.View>

                                <Box column>
                                    {
                                        f.type && (
                                            <Text numberOfLines={1}
                                                ellipsizeMode={'tail'}
                                                style={theme.paperTextPrimary}>{metadata[f.type].title}</Text>
                                        )
                                    }

                                    <Text numberOfLines={1}
                                        ellipsizeMode={'tail'}
                                        style={[theme.paperTextPrimary, styles.candidateName]}>{f.name}</Text>

                                    <Text style={[theme.paperTextPrimary, styles.candidateNumber]}>{f.number}</Text>
                                </Box>

                            </Box>
                        </View>
                    }
                    back={
                        <ViewOverflow>
                            <View column>
                                <Box padding style={styles.cardback}>
                                    <Text style={[theme.paperTextSecondary, { marginRight: 56 }]}>
                                        {f.shortDescription}
                                    </Text>
                                </Box>

                                <FoldView
                                    isLast={true}
                                    front={
                                        <View style={styles.cardfront}>
                                            <Box column padding>
                                                <Text style={theme.paperTextSecondary}>
                                                    {' '}
                                                </Text>
                                            </Box>
                                        </View>
                                    }
                                    back={
                                        <View style={styles.cardback}>
                                            <Box column padding>
                                                {
                                                    f.personal.map(({ value, attribute }) => (
                                                        <Box style={{ marginBottom: 8 }} key={attribute}>
                                                            <Text style={[theme.paperTextSecondary, { marginRight: 16, flex: 1 }]}>
                                                                {attribute}
                                                            </Text>
                                                            <Text style={[theme.paperTextPrimary, { flex: 1 }]}>
                                                                {value}
                                                            </Text>
                                                        </Box>
                                                    ))
                                                }
                                            </Box>
                                        </View>
                                    }>

                                    <View style={[styles.cardbase, { backgroundColor: theme.palette.Primary['500'].color }]}>
                                        <Box column padding>
                                            <Text style={[theme.paperTextSecondary, { color: theme.palette.Primary['500'].text }]}>
                                                {f.part}
                                            </Text>
                                        </Box>
                                    </View>

                                </FoldView>
                            </View>
                        </ViewOverflow>
                    }>

                    <View
                        style={[
                            styles.cardbase,
                            { backgroundColor: theme.palette.Primary['500'].color }
                        ]}>
                        <Box padding alignItems="center">

                            <Animated.View style={styles.candidateAvatarWrapper}>
                                <Image style={styles.candidateAvatar}
                                    source={{
                                        uri: f.photo
                                    }} />
                            </Animated.View>

                            <Box column>
                                {
                                    f.type && (
                                        <Text numberOfLines={1}
                                            ellipsizeMode={'tail'}
                                            style={[theme.paperTextPrimary, { color: theme.palette.Primary['500'].text }]}>
                                            {metadata[f.type].title}
                                        </Text>
                                    )
                                }

                                <Text numberOfLines={1}
                                    ellipsizeMode={'tail'}
                                    style={[theme.paperTextPrimary, styles.candidateName, { color: theme.palette.Primary['500'].text }]}>{f.name}</Text>

                                <Text style={[theme.paperTextPrimary, styles.candidateNumber, { color: theme.palette.Primary['500'].text }]}>
                                    {f.number}
                                </Text>
                            </Box>

                        </Box>
                    </View>

                </FoldView>

                <View
                    style={StyleSheet.absoluteFillObject}>

                    <Touchable
                        primary
                        onPress={() => {
                            this.state.expanded ? this.doMoveFabUp() : this.doMoveFabDown()
                            this.setState({ expanded: !this.state.expanded })
                        }}>
                        <Box fitAbsolute></Box>
                    </Touchable>
                </View>

                <Animated.View
                    style={{
                        position: 'absolute',
                        right: 16,
                        top: this.state.fabTop
                    }}>

                    <Fab icon={'heart'}
                        hoverPrimary
                        onPress={() => this.doRemoveFromFavorites(f)}
                        iconColor={theme.palette.Primary['500'].color}
                        color={theme.palette.White['500'].color} />

                </Animated.View>
            </Box>
        )
    }
}

const styles = (theme) => StyleSheet.create({
    cardWrapper: {
        marginTop: 8,
        marginBottom: 8,
    },
    cardbase: {
        width: Dimensions.get('window').width - 32,
        marginLeft: 16,
        ...theme.paper,
    },
    cardfront: {
        width: Dimensions.get('window').width - 32,
        marginLeft: 16,
        ...theme.paper,
    },
    cardback: {
        width: Dimensions.get('window').width - 32,
        marginLeft: 16,
        overflow: 'visible',
        ...theme.paper,
    },
    candidateAvatarWrapper: {
        width: 76,
        height: 76,
        borderRadius: 192,
        overflow: 'hidden',
        marginRight: 16
    },
    candidateAvatar: {
        width: 76,
        height: 76,
    },
    candidateName: {
        fontWeight: '900',
    },
    candidateNumber: {
        fontSize: 24,
        fontWeight: '900',
        color: theme.palette.Primary['500'].color
    },
})

export default translate('common')(withTheme(styles, FavoriteItem))