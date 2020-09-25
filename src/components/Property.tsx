import React from 'react'
import { Box, Text, Image, Flex } from 'rebass/styled-components'
import { P } from '../components/P'

type Owner = {
  name: string
  contact: string
}

type Address = {
  street: string
  city: string
  country: string
  zipcode: string
}

type Location = {
  lat: number
  lng: number
}

interface Property {
  owner: Owner
  address: Address
  location: Location
  images: string[]
  _id: string
  name: string
  type: string
  surfaceArea: number
  closePrice: number
  details: string
  expectedRent: number
  __v: number
}

interface Props {
  property: Property
}

const Property: React.FC<Props> = ({ property }) => {
  const pricePerMeter = property.closePrice / property.surfaceArea
  const rentPerMonth = property.expectedRent

  return (
    <Flex
      mb="10px"
      sx={{
        minHeight: 200,
        paddingY: 10,
        paddingX: 20,
        borderBottom: '1px solid #ddd',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          flexBasis: '200px',
        }}
      >
        <Image
          src={property.images[0]}
          sx={{
            position: 'absolute',
            width: '100%',
            maxWidth: 'unset',
            margin: 'auto',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </Box>
      <Flex
        flexDirection="column"
        sx={{
          flexGrow: 2,
          paddingLeft: 10,
        }}
      >
        <Text as="h3">{property.name}</Text>
        <P>
          <strong>Area</strong> {property.surfaceArea}m<sup>2</sup>
        </P>
        <P>
          <strong>Price per Meter</strong> {pricePerMeter}
        </P>
      </Flex>
    </Flex>
  )
}

export default Property
