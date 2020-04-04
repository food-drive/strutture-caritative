import React, {useMemo, useReducer} from 'react'
import {node, arrayOf, object} from 'prop-types'

import DataContext from './DataContext'
import reducer from './reducer'

const {Provider} = DataContext

const cols = [
  {key: 'denominazioneopt', value: 'Denominazione Opt'},
  {key: 'comune', value: 'Comune'},
  {key: 'provincia', value: 'Provincia'},
  {key: 'sedeoperativa', value: 'Sede Operativa'},
  {key: 'telefonosedeoperativa', value: 'Telefono Sede Operativa'},
]

const filters = [
  {key: 'denominazioneopt', label: 'Denominazione'},
  {key: 'comune', label: 'Comune'},
  {key: 'provincia', label: 'Provincia'},
  {key: 'sedeoperativa', label: 'Sede Operativa'},
]

const DataProvider = ({data, children}) => {
  const [activeFilters, dispatchFilter] = useReducer(reducer, {})
  const rows = useMemo(
    () =>
      data
        .map(({node}) => node)
        .filter(value =>
          Object.keys(activeFilters).reduce(
            (res, key) =>
              res &&
              value[key]
                .toLowerCase()
                .indexOf(activeFilters[key].toLowerCase()) !== -1,
            true,
          ),
        ),
    [data, activeFilters],
  )
  return (
    <Provider value={{rows, cols, filters, dispatchFilter}}>
      {children}
    </Provider>
  )
}

DataProvider.propTypes = {
  children: node.isRequired,
  data: arrayOf(object).isRequired,
}

export default DataProvider
