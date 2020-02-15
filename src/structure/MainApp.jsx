import React from 'react'
import DevReloader from './DevReloader'
import App from '../components/App'

const MainApp = () => (
  <DevReloader>
    <App />
  </DevReloader>
)

export default MainApp
