import React from 'react'
import Button from './Button'

function App() {
  return (
    <div>
      <h1>React Example</h1>
      <Button />
      <p>
        A paragraph with <code>nested code</code>
      </p>
      <p data-filant={undefined}>A paragraph without the attribute</p>
    </div>
  )
}

export default App
