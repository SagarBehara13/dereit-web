import React from 'react'
import Styled from 'styled-components'

const HEADER_HEIGHT = 60

type ContainerOptions = {
  height: string | '100%' | '100vh' | 'auto'
  width: string | '100%' | '100vw' | 'auto'
}

const Container = Styled.div(
  (
    props: ContainerOptions = {
      height: 'auto',
      width: 'auto',
    }
  ) => `
  display: flex;
  min-width: ${props.width};
  min-height: ${props.height};
  flex-direction: column;
`
)
export const Content = Styled.div`
  display: flex;
  flex-grow: 1;
`

export const Header = Styled.div`
  flex: 0 0 ${HEADER_HEIGHT};
`

export default class HeaderAndContent extends React.Component {
  static Header = Header
  static Content = Content

  render() {
    return <Container>{this.props.children}</Container>
  }
}
