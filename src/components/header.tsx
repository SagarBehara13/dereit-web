import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import { Box, Text } from 'rebass/styled-components'

const HeaderNavLink = Styled(Link)`
  font-size: 18px;
`

const NavLinkList = Styled.div`
  display: grid;
  gap: 20px;
  grid-auto-flow: column;
`

function Header() {
  return (
    <Box
      as="header"
      sx={{
        height: 60,
        px: 32,
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
      }}
    >
      <Text
        fontSize={
          ['8vw', null, '2vw'] // 38px, null, 80px, null, 156px
        }
      >
        DeREIT
      </Text>
    </Box>
  )
}

export default Header
