import React from 'react';
import { translate } from 'react-i18next';
import { Image, Linking, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Box, Page, Paper } from '../components';
import Buttom from '../components/Buttom';
import HeaderBackground from '../components/HeaderBackground';
import ScrollView from '../components/ScrollView';
import { withTheme } from '../theme';

class CandidateDetails extends React.Component {

    render() {

        const { t, theme, styles } = this.props
        return (
            <Page>

                <ScrollView>
                    <Box column fit centralize style={styles.scrollContent}
                        alignItems="stretch">

                        <HeaderBackground />

                        <Paper style={styles.card}>
                            <Box fit centralize column padding>
                                <Text style={[theme.paperTextPrimary, styles.title2]}>
                                    Olá, somos a
                                </Text>
                                <Text style={[theme.paperTextPrimary, styles.title1]}>
                                    Cytech Informática!
                                </Text>
                                <Text style={[theme.paperTextSecondary, styles.text]}>
                                    Desenvolvemos sites responsivos e aplicativos para Android e iOS, com interfaces leves e modernas. Este app é um ótimo exemplo do que podemos fazer.
                                </Text>

                                <Text style={[theme.paperTextSecondary, styles.text]}>
                                    Entre em contato e encontraremos a melhor solução para você no mundo digital!
                                </Text>

                                <Box column centralize>
                                    <Buttom
                                        style={{ marginBottom: 16 }}
                                        onPress={() => Linking.openURL('mailto:cytechcontato@gmail.com,felipe76857685@gmail.com?subject=Contato&body=Olá, pessoal da Cytech!')}>

                                        <Box centralize>
                                            <Text style={{ color: theme.palette.White['500'].color }}>
                                                {t('send-email').toUpperCase()}
                                            </Text>

                                            <Icon name={'email'} size={24}
                                                style={{ marginLeft: 16 }}
                                                color={theme.palette.White['500'].color} />
                                        </Box>

                                    </Buttom>
                                    <Buttom
                                        onPress={() => Linking.openURL('whatsapp://send?text=Olá, pessoal da Cytech!&phone=+5588994263541')}>

                                        <Box centralize>
                                            <Text style={{ color: theme.palette.White['500'].color }}>
                                                {t('send-wp-message').toUpperCase()}
                                            </Text>

                                            <Icon name={'whatsapp'} size={24}
                                                style={{ marginLeft: 16 }}
                                                color={theme.palette.White['500'].color} />
                                        </Box>

                                    </Buttom>
                                </Box>

                                <Buttom
                                    style={{ marginTop: 16 }}
                                    onPress={() => Linking.openURL('https://cytech.com.br')}>

                                    <Box centralize>
                                        <Text style={{ color: theme.palette.White['500'].color }}>
                                            {t('see-our-site').toUpperCase()}
                                        </Text>

                                        <Icon name={'earth'} size={24}
                                            style={{ marginLeft: 16 }}
                                            color={theme.palette.White['500'].color} />
                                    </Box>

                                </Buttom>
                            </Box>

                            <Box centralize fit>
                                <Image
                                    source={require('../resources/images/coffee.png')}
                                    style={{ width: 300, height: 300 * 454 / 643 }}
                                    resizeMode={'contain'} />
                            </Box>
                        </Paper>
                    </Box>
                </ScrollView>
            </Page>
        )
    }
}

const styles = (theme) => StyleSheet.create({
    scrollContent: {
        padding: 8
    },
    card: {
        margin: 8,
    },
    title1: {
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 16,
        flex: 1,
        color: theme.palette.Primary['500'].color,
        textAlign: 'center'
    },
    title2: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 16,
        flex: 1,
        textAlign: 'center'
    },
    text: {
        marginBottom: 16,
        textAlign: 'center'
    }
})

export default translate('common')(withTheme(styles, CandidateDetails))