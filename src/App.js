import React from 'react'
import Inputs from './Components/Inputs'
import Block from './Components/Block'
import BlockContextProvider, { InputContext } from './BlockContext'
const App = () => {
  return (
<BlockContextProvider>
      <Inputs/>
      <Block/>
      </BlockContextProvider>
  )
}

export default App
