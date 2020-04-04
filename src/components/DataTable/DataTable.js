import React from 'react'
// import {object, arrayOf} from 'prop-types'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import useData from '../../hooks/useData'

const DataTable = () => {
  const {rows, cols} = useData()
  return (
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
          {rows.map(({id, ...row}) => {
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
  )
}

// DataTable.propTypes = {
//   data: arrayOf(object).isRequired,
// }

export default DataTable
