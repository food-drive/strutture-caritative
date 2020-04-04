import React from 'react'
import {graphql} from 'gatsby'
import {shape, object, arrayOf} from 'prop-types'

import Box from '@material-ui/core/Box'
import DataProvider from '../providers/DataProvider'
import DataTable from '../components/DataTable'
import Filters from '../components/Filters'

const HomePage = ({
  data: {
    allGoogleSheetAnagraficaRow: {edges: data},
  },
}) => (
  <DataProvider data={data}>
    <Box maxWidth={1280} minWidth={600} my={10} mx="auto">
      <Box width="95%" mx="auto">
        <Box my={10}>
          <Filters />
        </Box>
        <DataTable />
      </Box>
    </Box>
  </DataProvider>
)

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
        }
      }
    }
  }
`
