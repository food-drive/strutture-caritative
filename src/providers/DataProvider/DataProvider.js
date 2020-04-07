import React, {useMemo, useReducer} from 'react'
import {node, arrayOf, object} from 'prop-types'

import DataContext from './DataContext'
import reducer from './reducer'

const {Provider} = DataContext

const cols = [
  {key: 'denominazioneopt', value: 'Denominazione Opt'},
  {key: 'comune', value: 'Comune'},
  {key: 'provincia', value: 'Provincia'},
  {key: 'sedeoperativa', value: 'Indirizzo'},
  {key: 'telefonosedeoperativa', value: 'Telefono'},
]

const initialFilters = {
  denominazioneopt: {
    name: 'denominazioneopt',
    label: 'Denominazione',
    value: '',
  },
  comune: {name: 'comune', label: 'Comune', value: ''},
  provincia: {name: 'provincia', label: 'Provincia', value: ''},
  sedeoperativa: {
    name: 'sedeoperativa',
    label: 'Indirizzo',
    value: '',
  },
}

const DataProvider = ({data, children}) => {
  const [filters, dispatchFilter] = useReducer(reducer, initialFilters)
  const rows = useMemo(
    () =>
      data
        .map(({node}) => node)
        .filter(value =>
          Object.keys(filters)
            .filter(key => filters[key].value)
            .reduce(
              (res, key) =>
                res &&
                value[key]
                  .toLowerCase()
                  .indexOf(filters[key].value.toLowerCase()) !== -1,
              true,
            ),
        ),
    [data, filters],
  )
  const coordinates = useMemo(
    () => rows.filter(({latitudine, longitudine}) => latitudine && longitudine),
    [rows],
  )
  return (
    <Provider value={{coordinates, rows, cols, filters, dispatchFilter}}>
      {children}
    </Provider>
  )
}

DataProvider.propTypes = {
  children: node.isRequired,
  data: arrayOf(object).isRequired,
}

export default DataProvider
