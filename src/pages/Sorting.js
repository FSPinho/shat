import React from 'react';
import { translate } from 'react-i18next';
import { StyleSheet } from 'react-native';
import AsyncStorage from 'redux-persist-filesystem-storage';
import { Box, Page, ScriptStep, Text } from '../components';
import { HouseMetadata, Houses } from '../constants/houses';
import { getRandomScript } from '../constants/script';
import { Auth } from '../services';
import Analytics from '../services/Analytics';
import { withTheme } from '../theme';

class Sorting extends React.Component {

    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props)

        const user = Auth.getCurrentUser()

        if (!user) {
            this.props.navigation.goBack()
        } else {
            this.state = {
                user,
                script: getRandomScript(user),
                currentStep: 0,
                answers: [],
                finished: false,
                calculating: false,
                betterHouse: undefined
            }
        }
    }

    async componentDidMount() {
        Analytics.doSendHomePageView()
    }

    goNextStep = async (answers) => {
        this.setState({
            ...this.state,
            currentStep: this.state.currentStep + 1,
            answers: answers ? [...this.state.answers, ...answers] : this.state.answers
        }, () => {
            const { currentStep, script } = this.state
            if (currentStep >= script.steps.length) {

                this.setState({
                    ...this.state,
                    calculating: true,
                }, () => {

                    const { answers } = this.state
                    const { Grifinoria, Sonserina, Corvinal, Lufalufa } = Houses
                    const GrifinoriaMetadata = HouseMetadata[Grifinoria]
                    const SonserinaMetadata = HouseMetadata[Sonserina]
                    const CorvinalMetadata = HouseMetadata[Corvinal]
                    const LufalufaMetadata = HouseMetadata[Lufalufa]

                    const _hasTag = (tags, tag) =>
                        !!tags.filter(t => t === tag)[0]

                    let grifinoriaScore = 0
                    answers.map(t => _hasTag(GrifinoriaMetadata.tags, t) && (grifinoriaScore += 1))

                    let sonserinaScore = 0
                    answers.map(t => _hasTag(SonserinaMetadata.tags, t) && (sonserinaScore += 1))

                    let corvinalScore = 0
                    answers.map(t => _hasTag(CorvinalMetadata.tags, t) && (corvinalScore += 1))

                    let lufalufaScore = 0
                    answers.map(t => _hasTag(LufalufaMetadata.tags, t) && (lufalufaScore += 1))

                    const tagsCount = answers.length

                    GrifinoriaMetadata.score = grifinoriaScore / tagsCount
                    SonserinaMetadata.score = sonserinaScore / tagsCount
                    CorvinalMetadata.score = corvinalScore / tagsCount
                    Lufalufa.score = lufalufaScore / tagsCount

                    const betterHouse = [
                        GrifinoriaMetadata,
                        SonserinaMetadata,
                        CorvinalMetadata,
                        LufalufaMetadata
                    ].sort((a, b) => b.score - a.score)[0]

                    setTimeout(() => {
                        this.setState({
                            ...this.state,
                            calculating: false,
                            finished: true,
                            betterHouse
                        }, async () => {

                            const { betterHouse, user } = this.state

                            await AsyncStorage.setItem('shat:house', JSON.stringify({
                                house: betterHouse,
                                user,
                            }))
                            this.props.navigation.goBack()

                        })
                    }, 1800)

                })

            }
        })
    }

    render() {

        if (!this.state)
            return <Box />

        const { t } = this.props
        const { script, user, currentStep, calculating } = this.state
        const { steps } = script

        return (
            <Page>
                <Box fit column centralize>

                    {
                        steps.map((s, i) => (
                            <Box key={i} fitAbsolute centralize padding>
                                <ScriptStep active={currentStep === i} data={s} user={user}
                                    onEnd={this.goNextStep} />
                            </Box>
                        ))
                    }

                    {
                        !!calculating && (
                            <Box fitAbsolute centralize padding>
                                <Text>{t('calculating')}</Text>
                            </Box>
                        )
                    }

                </Box>
            </Page>
        )
    }
}

const styles = (theme) => StyleSheet.create({

})

export default translate('common')(withTheme(styles, Sorting))