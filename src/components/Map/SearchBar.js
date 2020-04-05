import React, {useRef, useEffect, useState} from 'react'
import {shape, func} from 'prop-types'

import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const SearchBar = ({map, onSelect}) => {
  const [autoComplete, setAutoComplete] = useState()
  const [places, setPlaces] = useState()
  const inputRef = useRef(null)
  const [query, setQuery] = useState()
  const [results, setResults] = useState([])

  useEffect(() => {
    if (inputRef) {
      setAutoComplete(() => new google.maps.places.AutocompleteService(map))
      setPlaces(() => new google.maps.places.PlacesService(map))
    }
  }, [inputRef])

  const onKeyPress = ({key}) => {
    if (key === 'Enter') {
      updateResults()
    }
  }

  const updateResults = () => {
    if (query) {
      autoComplete.getQueryPredictions({input: query}, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          setResults(results)
        }
      })
    }
  }

  const onChange = ({target: {value}}) => setQuery(value)

  const handleSelect = placeId => {
    setResults([])
    places.getDetails({placeId}, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        map.fitBounds(place.geometry.viewport)
        onSelect(place.geometry.location)
      }
    })
  }

  return (
    <Box width="100%" position="absolute" top={0} zIndex={1}>
      <Box minWidth={100} maxWidth={500} margin="auto">
        <Paper>
          <Box
            width="100%"
            height="100%"
            p={1}
            display="flex"
            alignItems="center"
          >
            <TextField
              inputRef={inputRef}
              fullWidth
              placeholder="cerca"
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            <IconButton onClick={updateResults}>
              <SearchIcon />
            </IconButton>
          </Box>
          {!!results.length && (
            <List>
              {results.map(({place_id: id, description}) => (
                <ListItem key={id} button onClick={() => handleSelect(id)}>
                  <ListItemText>{description}</ListItemText>
                </ListItem>
              ))}
            </List>
          )}
        </Paper>
      </Box>
    </Box>
  )
}

SearchBar.propTypes = {
  map: shape({
    fitBounds: func.isRequired,
  }).isRequired,
  onSelect: func.isRequired,
}

export default SearchBar
