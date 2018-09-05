import * as React from 'react';
import { Image as CachedImage } from 'react-native';
import withTheme from '../theme/withTheme';

class Image extends React.PureComponent {
    render() {

        const {theme, styles, source, ...props} = this.props

        return (
            <CachedImage
                // useQueryParamsInCacheKey={false}
                // activityIndicatorProps={{ color: theme.palette.Primary['500'].color, size: 'large' }}
                // ttl={1}
                defaultSource={require('../resources/images/no-image.png')}
                source={source}
                {...props} />
        )
    }
}

export default withTheme({}, Image)