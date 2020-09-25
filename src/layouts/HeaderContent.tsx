import React from 'react'
import { Box, BoxProps, Flex, FlexProps } from 'rebass/styled-components'
import Styled from 'styled-components'

const HEADER_HEIGHT = 60

const Container = props => (
  <Box
    {...props}
    sx={{
      ...props.sx,
      display: 'flex',
      flexDirection: 'column',
    }}
  />
)

export const Content: React.FC<FlexProps> = props => (
  <Flex flexGrow={1} {...props} />
)

export const Header = Styled.div`
  flex: 0 0 ${HEADER_HEIGHT}px;
`

export default class HeaderAndContent extends React.Component<BoxProps> {
  static Header = Header
  static Content = Content

  render() {
    return <Container {...this.props} />
  }
}
