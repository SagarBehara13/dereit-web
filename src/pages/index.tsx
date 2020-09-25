import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import { Flex, Box, Text } from 'rebass/styled-components'
import { HeaderWithContent as Layout } from '../layouts'
import Header from '../components/header'

const IndexPage: React.FC = () => {
  return (
    <Layout
      sx={{
        backgroundImage: `url(${require('../images/home-splash.jpg')})`,
        backgroundSize: 'cover',
      }}
      height="100vh"
    >
      <SEO title="Home" />
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content>
        <Flex
          alignItems="center"
          sx={{
            px: 32,
          }}
          width="100%"
        >
          <Box>
            <Box>
              <Text
                as="h1"
                fontSize={
                  ['8vw', null, '6vw', '4vw', '4vw'] // 38px, null, 80px, null, 156px
                }
                sx={{
                  position: 'relative',
                  color: 'white',
                }}
                display="inline-block"
                fontFamily="serif"
                fontWeight="600"
              >
                Invest, earn, and grow.
              </Text>
            </Box>
            <Link to="/explore">
              <Text
                as="h1"
                fontSize={
                  ['8vw', null, '6vw', '4vw', '4vw'] // 38px, null, 80px, null, 156px
                }
                sx={{
                  color: 'white',
                  position: 'relative',
                  textDecoration: 'underline',
                }}
                display="inline-block"
              >
                Explore
              </Text>
            </Link>
          </Box>
        </Flex>
      </Layout.Content>
    </Layout>
  )
}

export default IndexPage
