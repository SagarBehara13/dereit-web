import React from 'react'
import { Link } from 'gatsby'
import { Center as Layout } from '../layouts'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout height="100vh" width="100vw">
    <SEO title="Not found" />
    <h1>Lost your map?</h1>
    <p>
      We have an extra copy for you. <Link to="/">Go back to home</Link>
    </p>
  </Layout>
)

export default NotFoundPage
