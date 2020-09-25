import Axios from 'axios'
import Qs from 'query-string'
import MapboxGl from 'mapbox-gl'
import { useLocation } from '@reach/router'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Text } from 'rebass/styled-components'

import Map from '../components/Map'
import SEO from '../components/seo'
import { P } from '../components/P'
import Header from '../components/header'
import Spinner from '../components/Loading'
import Property from '../components/Property'
import { HeaderWithContent as Layout } from '../layouts'

const getProperties = () =>
  Axios.get(`https://realestae.herokuapp.com/api/property/marketData`)

const Filter: React.FC<{
  mapRef: MapboxGl.Map
}> = ({ mapRef }) => {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  const [city, setCity] = useState('')
  const location = useLocation()

  // console.log({ mapRef })

  useEffect(() => {
    const query = Qs.parse(location.search)

    if (query.city) {
      const city = query.city as string
      setCity(city)
    }

    // Push to map
    getProperties()
      .then(({ data }) => {
        setProperties(data)
        // Add to map
        data.forEach((property: Property) => {
          const marker = new MapboxGl.Marker()
          marker.setLngLat(property.location)
          console.log(marker)
          marker.addTo(mapRef)
        })
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading || properties.length === 0) {
    return (
      <Flex height="100%" alignItems="center" justifyContent="center">
        {loading ? <Spinner /> : <Text as="h4">No listing found</Text>}
      </Flex>
    )
  }

  return (
    <Flex height="100%" flexDirection="column" px="10px">
      <P>Explore {city}</P>
      <Flex as="section" flexDirection="column">
        {properties.map(property => (
          <Property key={property._id} property={property} />
        ))}
      </Flex>
    </Flex>
  )
}

const IndexPage: React.FC = () => {
  const [map, setMap] = useState<MapboxGl.Map>(null)

  return (
    <Layout height="100vh">
      <SEO title="Explore" />
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content flexDirection={['column', null, 'row']}>
        <Box width={[1, null, 6 / 10]}>
          <Filter mapRef={map} />
        </Box>
        <Box
          width={[1, null, 4 / 10]}
          sx={{
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <Map mapRef={map => setMap(map)} />
          </Box>
        </Box>
      </Layout.Content>
    </Layout>
  )
}

export default IndexPage
