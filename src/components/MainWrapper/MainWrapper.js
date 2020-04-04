import React from 'react'
import {node} from 'prop-types'

import {ThemeProvider} from '@material-ui/styles'

import theme from './theme'

import './styles.css'

const MainWrapper = ({element}) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)

MainWrapper.propTypes = {
  element: node.isRequired,
}

export default MainWrapper
