import MapboxGl from 'mapbox-gl'
import { Box } from 'rebass/styled-components'
import React, { useEffect, useRef } from 'react'

// Update global token
MapboxGl.accessToken = process.env.MAPBOX_API_TOKEN

interface MapProps {
  mapRef(ref: MapboxGl.Map): any
}

const Map: React.FC<MapProps> = props => {
  let ref = useRef()
  let mapbox: MapboxGl.Map

  useEffect(() => {
    mapbox = new MapboxGl.Map({
      container: ref.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5, 34],
      zoom: 3,
    })

    props.mapRef(mapbox)
  }, [])

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
      }}
      ref={ref}
    />
  )
}

Map.defaultProps = {
  mapRef: ref => {},
}

export default Map
