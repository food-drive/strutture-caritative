import React, {useRef, useEffect, useState} from 'react'

import {Helmet} from 'react-helmet-async'
import Box from '@material-ui/core/Box'
import useData from '../../hooks/useData'

import SearchBar from './SearchBar'

const Map = () => {
  const [map, setMap] = useState()
  const [markers, setMarkers] = useState([])
  const [searchMarker, setSearchMarker] = useState()
  const [infoWindow, setInfoWindow] = useState()
  const mapRef = useRef(null)

  const {coordinates} = useData()

  const clearMarkers = () => markers.forEach(marker => marker.setMap(null))

  useEffect(() => {
    if (mapRef) {
      window.initMap = () => {
        setMap(
          () =>
            new google.maps.Map(mapRef.current, {
              zoom: 9,
              center: new google.maps.LatLng(37.6368067, 14.2447748),
              mapTypeId: 'terrain',
            }),
        )
        setInfoWindow(new google.maps.InfoWindow())
      }
    }
  }, [mapRef])

  const createMarker = (lat, long) => {
    const marker = new google.maps.Marker({
      map,
      position: new google.maps.LatLng(lat, long),
    })
    return marker
  }
  useEffect(() => {
    if (map) {
      clearMarkers()
      const mapMarkers = []
      coordinates.forEach(
        ({denominazioneopt: title, latitudine, longitudine}) => {
          const marker = createMarker(latitudine, longitudine)
          marker.addListener('click', () => {
            infoWindow.setContent(`${title}`)
            infoWindow.open(map, marker)
          })
          mapMarkers.push(marker)
        },
      )
      setMarkers(mapMarkers)
    }
  }, [map, coordinates])

  const onSelect = ({lat, lng}) => {
    if (searchMarker) searchMarker.setMap(null)
    setSearchMarker(createMarker(lat(), lng()))
  }

  return (
    <>
      {mapRef && (
        <Helmet>
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`}
            async
            defer
          />
        </Helmet>
      )}
      <Box position="relative" height={650} width="100%">
        {map && <SearchBar map={map} onSelect={onSelect} />}
        <Box height="100%" width="100%" ref={mapRef} />
      </Box>
    </>
  )
}

export default Map
