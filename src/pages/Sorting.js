import React from 'react';
import { translate } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Box, Page, Paper } from '../components';
import Analytics from '../services/Analytics';
import { withTheme } from '../theme';

class Sorting extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    async componentDidMount() {
        Analytics.doSendHomePageView()
    }


    render() {

        const { t, theme, styles } = this.props
        const { } = this.state

        return (
            <Page>
                <Box fit column centralize>

                    <Paper padding></Paper>

                </Box>
            </Page>
        )
    }
}

const styles = (theme) => StyleSheet.create({

})

export default translate('common')(withTheme(styles, Sorting))