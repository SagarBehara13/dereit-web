import React from 'react'
import { Text, TextProps } from 'rebass/styled-components'

export const P: React.FC<TextProps> = props => (
  <Text
    fontSize={
      ['3vw', '2vw', '1.5vw', '1vw'] // 38px, null, 80px, null, 156px
    }
    {...props}
  />
)
