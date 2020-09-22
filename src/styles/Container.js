import React from 'react';
import { Box } from 'rebass/styled-components';
import Theme from './Theme';

const Container = React.forwardRef((props, ref) => {

  const mediaKey = `@media (min-width: ${Theme.breakpoints[1]})`;

  return (
    <Box
      {...props}
      ref={ref}
      px={[`24px`, 4, 0]}
      mx='auto'
      sx={{
        [mediaKey]: {
          maxWidth: (props.fluid ? '90vw' : '1024px')
        }
      }}
    />
  )
})

Container.defaultProps = {
  fluid: true
}

export default Container;
