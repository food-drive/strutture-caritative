import {useContext} from 'react'
import DataContext from '../../providers/DataProvider/DataContext'

export default () => {
  const context = useContext(DataContext)
  return context
}
