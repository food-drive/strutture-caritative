import React, {useMemo} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import useData from '../../hooks/useData'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import {Button} from '@material-ui/core'

const Filters = () => {
  const {filters, dispatchFilter} = useData()
  const inputRefs = useMemo(() => {
    const refs = {}
    Object.keys(filters).forEach(key => {
      refs[key] = {current: null}
    })
    return refs
  }, [])
  const handleChange = ({target: {name: key, value}}) => {
    dispatchFilter({key, value})
  }
  const clearFilters = () => {
    dispatchFilter({clear: true})
    Object.keys(filters).forEach(key => {
      inputRefs[key].current.value = ''
    })
  }
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {Object.keys(filters).map(key => {
            const {label, value} = filters[key]
            return (
              <Grid item key={key} xs={12} md="auto">
                <TextField
                  label={label}
                  placeholder={label}
                  name={key}
                  fullWidth
                  variant="outlined"
                  defaultValue={value}
                  onChange={handleChange}
                  inputRef={inputRefs[key]}
                />
              </Grid>
            )
          })}
          <Grid item xs={12} md="auto">
            <Button
              color="secondary"
              variant="outlined"
              size="large"
              fullWidth
              onClick={clearFilters}
            >
              Svuota filtri
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Filters
