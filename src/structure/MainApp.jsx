import React from 'react'
import DevReloader from './DevReloader'
import App from '../components/App'
import ErrorBoundary from './ErrorBoundary'

const MainApp = () => (
  <ErrorBoundary>
    <DevReloader>
      <App />
    </DevReloader>
  </ErrorBoundary>
)

export default MainApp
