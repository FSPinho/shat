import React from 'react';
import { translate } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation';
import { About, Home } from '../pages';
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
                        backgroundColor: theme.palette.Primary['500'].color,
                        elevation: navigation.getParam('showHeaderShadow', undefined) ? 4 : 0
                    },
                    headerTintColor: theme.palette.Primary['500'].text
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
            [Routes.Home]: { screen: Home, },
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