import React from 'react'
import Styled from 'styled-components'

const HEADER_HEIGHT = '60px'

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
  width: ${props.width};
  height: ${props.height};
  flex-direction: column;
`
)

const Content = Styled.div`
  display: flex;
  flex-grow: 1;
`

const HeaderWrapper = Styled.div`
  text-align: center;
  flex: 0 0 ${HEADER_HEIGHT};
`

const HeaderInnerWrapper = Styled.header`
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 1;
  height: ${HEADER_HEIGHT};
  box-shadow: 0px 6px 6px 0 rgba(0,0,0,.12);
  display: flex;
  justify-content: center;
  align-items: center;
`

/**
 * A wrapper for fixed header
 */
const Header = ({ props, children }) => {
  console.log(props)

  return (
    <HeaderWrapper {...props}>
      <HeaderInnerWrapper>{children}</HeaderInnerWrapper>
    </HeaderWrapper>
  )
}

export default {
  Container,
  Content,
  Header,
}
