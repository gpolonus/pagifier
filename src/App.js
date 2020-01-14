
import React, { useState } from 'react';
import Page from './components/Page'
import pages from './pages'
import './App.css';

function App() {

  const [ [ next, backStack ], setDirectState ] = useState(['index', []])

  const setDirect = (nextId, newBackStack) => setDirectState([nextId, newBackStack])

  const redirect = (nextId, backId) => {
    console.log('redirect', [backId, ...backStack])
    setDirect(nextId, [backId, ...backStack])
  }

  const goBack = () => {
    const [backId, ...newbackStack] = backStack
    console.log('back', backId, newbackStack)
    setDirect(backId, newbackStack)
  }

  return (
    <div className="App">
      <Page things={pages[next]} id={next} back={backStack.length} goBack={goBack} redirect={redirect} />
    </div>
  );
}

export default App;
