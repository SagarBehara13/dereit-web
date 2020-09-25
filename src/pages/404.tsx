import React from 'react'
import { Link } from 'gatsby'
import { Center as Layout } from '../layouts'
import SEO from '../components/seo'
import { Text } from 'rebass/styled-components'

const NotFoundPage = () => (
  <Layout height="100vh" width="100vw">
    <SEO title="Not found" />
    <Text as="h1">Not Found</Text>
    <Text>
      <Link to="/">Go back to home</Link>
    </Text>
  </Layout>
)

export default NotFoundPage
