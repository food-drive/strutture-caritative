import React from 'react'
import {graphql} from 'gatsby'
import {shape, object, arrayOf} from 'prop-types'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'

const cols = [
  {key: 'denominazioneopt', value: 'Denominazione Opt'},
  {key: 'comune', value: 'Comune'},
  {key: 'provincia', value: 'Provincia'},
  {key: 'sedeoperativa', value: 'Sede Operativa'},
  {key: 'telefonosedeoperativa', value: 'Telefono Sede Operativa'},
]

const HomePage = ({
  data: {
    allGoogleSheetAnagraficaRow: {edges: data},
  },
}) => (
  <Box maxWidth={1200} minWidth={650} mx="auto" my={10}>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {cols.map(({key, value}) => (
              <TableCell key={key}>{value}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({node: {id, ...row}}) => {
            return (
              <TableRow key={id}>
                {cols.map(({key}) => (
                  <TableCell key={`${key}-${id}`}>{row[key]}</TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
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
