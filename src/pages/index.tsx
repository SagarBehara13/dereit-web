import { Link } from 'gatsby'
import SEO from '../components/seo'
import { Center as Layout } from '../layouts'

const IndexPage: React.FC = () => {
  return (
    <Layout width="100vw" height="100vh">
      <SEO title="Home" />
      <h1>Experience real estate as stock options</h1>
      <Link to="/expore">Explore</Link>
    </Layout>
  )
}

export default IndexPage
