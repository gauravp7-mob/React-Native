
import React from 'react'
import Navigation from './src/Navigation'

function App() {
  const isLoggedIn = false;
  return (
    <Navigation isLoggedIn={isLoggedIn} />
  )
}

export default App