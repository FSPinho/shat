import React from 'react';
import { FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';


class Page extends React.Component {

    onScroll = (event) => {
        const params = this.props.navigation.state.params || {}

        const speedY = event.nativeEvent.velocity.y
        let hideHeader = false
        let showHeaderShadow = false

        if (speedY > 0 && event.nativeEvent.contentOffset.y > 56) {
            // console.log('ScrollView:onScroll - Hiding header...')
            hideHeader = true
        } else {
            // console.log('ScrollView:onScroll - Showing header...')
            hideHeader = false
        }

        if (event.nativeEvent.contentOffset.y > 16) {
            showHeaderShadow = true
        } else if (event.nativeEvent.contentOffset.y <= 16) {
            showHeaderShadow = false
        }

        if (params.hideHeader !== hideHeader || params.showHeaderShadow !== showHeaderShadow)
            this.props.navigation.setParams({
                ...params,
                showHeaderShadow,
                hideHeader
            })

        if (this.props.onScroll)
            this.props.onScroll(event)
    }

    render() {
        return <FlatList onScroll={this.onScroll} {...this.props} />
    }
}

export default withNavigation(Page)