import React from 'react';
import { translate } from 'react-i18next';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation';
import { Box } from '../components';
import Buttom from '../components/Buttom';
import Text from '../components/Text';
import { About, Home, Sorting } from '../pages';
import { Auth } from '../services';
import { withTheme } from '../theme';

export const Routes = {
    Home: 'HOME',
    About: 'ABOUT',
    Sorting: 'Sorting'
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

        this.Navigator = createStackNavigator({
            [Routes.Home]: {
                screen: Home,
                navigationOptions: ({ navigation }) => {
                    const user = Auth.getCurrentUser()

                    return {
                        headerTitle: <Text size={20}
                            style={{ marginLeft: 16 }}
                            weight={'SemiBold'}>{t('home-screen-title')}</Text>,
                        headerRight:
                            <Box style={{ paddingRight: 16, paddingLeft: 16 }} centralize>

                                <Box style={{ paddingRight: 16 }}>
                                    <Buttom flat circle onPress={() => navigation.navigate(Routes.About)}>
                                        <Icon name={'information'} size={18} color={theme ? theme.palette.Primary['700'].color : undefined} />
                                    </Buttom>
                                </Box>

                                {!!user && <Image style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 192,
                                    marginRight: 16
                                }} source={{ uri: user._user.photoURL }} />}

                                <Buttom
                                    flat
                                    onPress={() => Auth.doToggleAuth(t)}>

                                    {!!user ? t('sign-out') : t('sign-in')}

                                </Buttom>
                            </Box>
                    }
                }
            },
            [Routes.Sorting]: { screen: Sorting, },
            [Routes.About]: { screen: About, }
        }, stackNavigationOptions)
    }

    render() {

        const Navigator = this.Navigator
        const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

        return (
            <Navigator persistenceKey={navigationPersistenceKey} />
            // <Navigator />
        )
    }
}

export default translate('common')(withTheme({}, RootNavigation))