import React from 'react';
import { translate } from 'react-i18next';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation';
import { Box } from '../components';
import Buttom from '../components/Buttom';
import { About, Home } from '../pages';
import { Auth } from '../services';
import { withTheme } from '../theme';

export const Routes = {
    Home: 'HOME',
    About: 'ABOUT'
}

class RootNavigation extends React.Component {

    constructor(props) {
        super(props)

        const { t, theme } = props

        stackNavigationOptions = {
            navigationOptions: ({ navigation }) => {
                return {
                    headerStyle: {
                        ...theme.page,
                        elevation: navigation.getParam('showHeaderShadow', undefined) ? 4 : 0
                    },
                    headerTintColor: theme.palette.Primary['700'].color
                }
            }
        }

        tabNavigationOptions = {
            navigationOptions: ({ navigation }) => {
                const { routeName } = navigation.state;

                return {
                    tabBarIcon: ({ focused, tintColor }) => {
                        if (routeName === Routes.Home)
                            iconName = focused ? 'home' : 'home-outline'
                        if (routeName === Routes.Favorites)
                            iconName = focused ? 'heart' : 'heart-outline'
                        if (routeName === Routes.CandidateDetails)
                            iconName = focused ? 'information' : 'information-outline'
                        if (routeName === Routes.CandidateCriticism)
                            iconName = focused ? 'emoticon-sad' : 'emoticon-sad'
                        if (routeName === Routes.CandidatePraise)
                            iconName = focused ? 'emoticon' : 'emoticon-happy'
                        return <Icon color={tintColor} name={iconName} size={23} />
                    }
                }
            },
            tabBarPosition: 'bottom',
            optimizationsEnabled: true,
            tabBarOptions: {
                style: {
                    backgroundColor: theme.palette.White['500'].color,
                    elevation: 4,
                    height: 56
                },
                indicatorStyle: {
                    height: 0
                },
                labelStyle: {
                    fontSize: 10,
                    padding: 0,
                    margin: 0
                },
                activeTintColor: theme.palette.Primary['500'].color,
                inactiveTintColor: theme.palette.Black.Secondary.color,
                pressColor: theme.palette.Primary['500'].color,
                showIcon: true
            }
        }

        this.Navigator = createStackNavigator({
            [Routes.Home]: {
                screen: Home,
                navigationOptions: ({ navigation }) => {
                    const user = Auth.getCurrentUser()

                    return {
                        title: t('home-screen-title'),
                        headerRight:
                            <Box style={{ paddingRight: 16, paddingLeft: 16 }} centralize>

                                <Box style={{ paddingRight: 8 }}>
                                    <Buttom circle flat onPress={() => navigation.navigate(Routes.About)} style={{ elevation: 0 }}>
                                        <Icon name={'information'} size={24} color={theme ? theme.palette.Primary['700'].color : undefined} />
                                    </Buttom>
                                </Box>

                                {!!user && <Image style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 192,
                                    marginRight: 16
                                }} source={{ uri: user._user.photoURL }} />}

                                <Buttom
                                    onPress={() => Auth.doToggleAuth(t)}>

                                    {!!user ? t('sign-out') : t('sign-in')}

                                </Buttom>
                            </Box>
                    }
                }
            },
            [Routes.About]: { screen: About, }
        }, stackNavigationOptions)
    }

    render() {

        const Navigator = this.Navigator
        const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

        return (
            <Navigator persistenceKey={navigationPersistenceKey} />
        )
    }
}

export default translate('common')(withTheme({}, RootNavigation))