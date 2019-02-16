import React from 'react';
import { NavContent, useLoadingRoute } from 'react-navi'
import LoadingBar from './components/LoadingBar'

const App = () => {
  let loadingRoute = useLoadingRoute()

  return(
    <div className="App">
      <LoadingBar isActive={!!loadingRoute} />
      <NavContent />
    </div>
  )
}

export default App;
