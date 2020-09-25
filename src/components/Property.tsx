import React, { ComponentProps } from 'react'
import { Box } from 'rebass'

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

const Property: React.FC<Props> = () => {
  return <Box></Box>
}

export default Property
