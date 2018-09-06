import PropTypes from 'prop-types';
import React from 'react';
import { translate } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Box, Paper } from '../components';
import { StepTypes } from '../constants/script';
import Analytics from '../services/Analytics';
import { withTheme } from '../theme';
import FadeFromDown from '../transitions/FadeFromDown';
import Buttom from './Buttom';
import Spacer from './Spacer';
import Text from './Text';

const DEF_DELAY = 1200
const DEF_DELAY_INITIAL_MESSAGE = 600
const DEF_DELAY_BETWEEN_MESSAGES = 600
const DEF_MESSAGE_DURATION = 1200

class ScriptStep extends React.Component {

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

        const { t, theme, styles, index, active, data, user, onEnd } = this.props
        const { } = this.state

        const { type, messages, question, last } = data

        return (type === StepTypes.Message) ? (
            <FadeFromDown visible={active} duration={DEF_DELAY}>
                <Paper padding>

                    {
                        messages.map((m, i) => (
                            <FadeFromDown
                                key={i}
                                visible
                                duration={DEF_MESSAGE_DURATION}
                                delay={i * DEF_DELAY_BETWEEN_MESSAGES + DEF_DELAY_INITIAL_MESSAGE}>

                                <Text size={24} style={styles.messageText}>{m}</Text>

                            </FadeFromDown>
                        ))
                    }

                    <Spacer vertical />

                    <FadeFromDown visible delay={messages.length * DEF_DELAY_BETWEEN_MESSAGES + DEF_DELAY_INITIAL_MESSAGE}>
                        <Box centralize>
                            <Buttom onPress={onEnd} flat children={last ? t('finish') : t('next')} />
                        </Box>
                    </FadeFromDown>

                </Paper>

            </FadeFromDown>
        ) : (type === StepTypes.Question) ? (
            <FadeFromDown visible={active} duration={DEF_DELAY}>
                <Paper padding>

                    <FadeFromDown
                        visible
                        duration={DEF_MESSAGE_DURATION}>

                        <Text size={24} style={styles.messageText}>{question.text}</Text>

                    </FadeFromDown>

                    <Box column centralize>
                        {
                            question.options.map((op, i) => (
                                <FadeFromDown
                                    key={i}
                                    visible
                                    duration={DEF_MESSAGE_DURATION}
                                    delay={i * DEF_DELAY_BETWEEN_MESSAGES + DEF_DELAY_INITIAL_MESSAGE}>

                                    <Spacer vertical />

                                    <Buttom flat onPress={() => onEnd(op.tags)}>{op.text}</Buttom>

                                </FadeFromDown>
                            ))
                        }
                    </Box>
                </Paper>

            </FadeFromDown>
        ) : <Box />
    }
}

ScriptStep.propTypes = {
    index: PropTypes.number,
    active: PropTypes.bool,
    data: PropTypes.any.isRequired,
    user: PropTypes.any.isRequired,
    onEnd: PropTypes.func.isRequired,
}

const styles = (theme) => StyleSheet.create({
    messageText: {
        textAlign: 'center'
    }
})

export default translate('common')(withTheme(styles, ScriptStep))