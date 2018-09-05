import React, {Component} from 'react'
import PropTypes from 'prop-types'
import hoistStatics from 'hoist-non-react-statics';


export default (styles, _Component) => {
    const Wrapper = class WithTheme extends Component {
        static contextTypes = {
            theme: PropTypes.any
        }

        render() {
            const _styles = typeof styles === 'function' ? styles(this.context.theme) : styles

            return (
                <_Component
                    styles={_styles}
                    theme={this.context.theme} {...this.props} />
            )
        }
    }

    return hoistStatics(Wrapper, _Component)
}