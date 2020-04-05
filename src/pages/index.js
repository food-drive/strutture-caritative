import React, {useState} from 'react'
import {graphql} from 'gatsby'
import {shape, object, arrayOf} from 'prop-types'

import Box from '@material-ui/core/Box'
import DataProvider from '../providers/DataProvider'
import DataTable from '../components/DataTable'
import Filters from '../components/Filters'
import Map from '../components/Map'
import {Tab, Tabs, Paper} from '@material-ui/core'

const HomePage = ({
  data: {
    allGoogleSheetAnagraficaRow: {edges: data},
  },
}) => {
  const [view, setView] = useState(0)
  const handleChange = (event, newView) => setView(newView)
  return (
    <DataProvider data={data}>
      <Box maxWidth={1280} minWidth={600} my={10} mx="auto">
        <Box width="95%" mx="auto">
          <Box my={5}>
            <Filters />
          </Box>
          <Box mb={2}>
            <Paper>
              <Tabs
                indicatorColor="primary"
                value={view}
                onChange={handleChange}
              >
                <Tab label="Elenco" />
                <Tab label="Mappa" />
              </Tabs>
            </Paper>
          </Box>
          <Box display={view === 1 ? 'block' : 'none'}>
            <Map />
          </Box>
          <Box display={view === 0 ? 'block' : 'none'}>
            <DataTable />
          </Box>
        </Box>
      </Box>
    </DataProvider>
  )
}

HomePage.propTypes = {
  data: shape({
    allGoogleSheetAnagraficaRow: shape({
      edges: arrayOf(object).isRequired,
    }).isRequired,
  }).isRequired,
}

export default HomePage

export const query = graphql`
  query MyQuery {
    allGoogleSheetAnagraficaRow {
      edges {
        node {
          id
          denominazioneopt
          comune
          provincia
          sedeoperativa
          telefonosedeoperativa
          latitudine
          longitudine
        }
      }
    }
  }
`
