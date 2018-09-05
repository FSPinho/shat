import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, StyleSheet, Text} from 'react-native';


const DEF_ITEMS_PAGE_SIZE = 8


class List extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            pageSize: DEF_ITEMS_PAGE_SIZE,
            items: [],
        }
    }

    componentDidMount = () =>
        this.doLoadItems()

    doLoadItems = () => {
        const {loadItems} = this.props

        setTimeout(() => {
            if (loadItems) {

                const {items, pageSize} = this.state
                const res = loadItems(items.length, pageSize)

                if (typeof res === 'object' && typeof res.then === 'function') {
                    res.then(items => {
                        if (typeof items === 'object' && typeof items.length === 'number')
                            this.setState({
                                ...this.state, items
                            })
                    })
                } else if (typeof res === 'object' && typeof res.length === 'number') {
                    this.setState({
                        ...this.state, items
                    })
                }
            }
        }, 1000)
    }

    renderRowItem = ({item}) => (<Text>{item.name}</Text>)

    render() {

        const {padding, style, onScroll, onScrollEnd, theme} = this.props
        const {items} = this.state

        /**
         * Styles
         * */
        const _styles = []

        _styles.push(styles.root)

        if (padding)
            _styles.push(styles.padding)

        _styles.push(style)

        return (
            <FlatList style={_styles} column
                      onScroll={onScroll}
                      onScrollEndDrag={onScrollEnd}
                      data={items}
                      renderItem={this.renderRowItem}/>
        )
    }
}

List.propTypes = {
    padding: PropTypes.bool,
    grid: PropTypes.bool,
    loadItems: PropTypes.func,
    onScroll: PropTypes.func,
    onScrollEnd: PropTypes.func,

    style: PropTypes.any,
}

const styles = StyleSheet.create({
    root: {
        position: 'relative',
        padding: 0,
    },
    padding: {
        padding: 16
    }
});

export default List