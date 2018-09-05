import React from 'react';
import { ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';


class Page extends React.Component {

    onScroll = (event) => {
        const params = this.props.navigation.state.params || {}

        if (event.nativeEvent.contentOffset.y > 16 && !params.showHeaderShadow) {
            this.props.navigation.setParams({
                ...params,
                showHeaderShadow: true
            })
        } else if (event.nativeEvent.contentOffset.y <= 16 && params.showHeaderShadow) {
            this.props.navigation.setParams({
                ...params,
                showHeaderShadow: false
            })
        }

        if (this.props.onScroll)
            this.props.onScroll(event)
    }

    render() {
        return <ScrollView onScroll={this.onScroll} {...this.props} />
    }
}

export default withNavigation(Page)