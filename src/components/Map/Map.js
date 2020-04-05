import React, {useRef, useEffect, useState} from 'react'
import {Helmet} from 'react-helmet-async'
import {Box} from '@material-ui/core'
import useData from '../../hooks/useData'

const Map = () => {
  const [map, setMap] = useState()
  const [markers, setMarkers] = useState([])
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

  useEffect(() => {
    if (map) {
      clearMarkers()
      const mapMarkers = []
      coordinates.forEach(
        ({denominazioneopt: title, latitudine, longitudine}) => {
          mapMarkers.push(
            new google.maps.Marker({
              position: new google.maps.LatLng(latitudine, longitudine),
              title,
            }),
          )
          setMarkers(mapMarkers)
        },
      )
    }
  }, [map, coordinates])

  useEffect(() => {
    if (map) {
      markers.forEach(marker => {
        const {title} = marker
        marker.setMap(map)
        marker.addListener('click', () => {
          infoWindow.setContent(`${title}`)
          infoWindow.open(map, marker)
        })
      })
    }
  }, [map, markers])

  return (
    <>
      {mapRef && (
        <Helmet>
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}&callback=initMap`}
            async
            defer
          />
        </Helmet>
      )}
      <Box id="map" height={650} width="100%" ref={mapRef} />
    </>
  )
}

export default Map
