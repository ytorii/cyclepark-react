import React from 'react';
import { NavProvider, NavContent, NavLoading } from 'react-navi'

const App = props => (
  <NavProvider navigation={props.navigation}>
    <NavLoading>
      { loadingRoute =>
        <div className="App">
          {
            loadingRoute &&
              <div className="App-loading-bar" />
          }
          <NavContent />
        </div>
      }
    </NavLoading>
  </NavProvider>
)

export default App;
