import React from 'react';
import Nav from './nav'
import './scss/index.scss'
import {Movieprovider} from './moviecontext'
import Movielist from './movielist'
import Addmovie from './addmovie'

function App() {
  return (
    <Movieprovider>
      <div>
     <Nav/> 
    <Addmovie/>
    <div className="app">
     <Movielist/>
     </div>
    </div>
    </Movieprovider>
  );
}

export default App;
