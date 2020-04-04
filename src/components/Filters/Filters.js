import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import useData from '../../hooks/useData'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import {Button} from '@material-ui/core'

const Filters = () => {
  const {filters, dispatchFilter} = useData()
  const handleChange = ({target: {name: key, value}}) => {
    dispatchFilter({key, value})
  }
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {filters.map(({key, label}) => (
            <Grid item key={key} xs={12} md="auto">
              <TextField
                label={label}
                name={key}
                fullWidth
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          ))}
          <Grid item xs={12} md="auto">
            <Button color="secondary" variant="outlined" size="large" fullWidth>
              Elimina filtri
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Filters
