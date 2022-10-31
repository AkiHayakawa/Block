import React, {  useState } from 'react'
export const InputContext = React.createContext();

const BlockContextProvider = ({children}) => {
  const [style,setStyle] =useState([])
  function addBlock(obj){
    let style = obj
    setStyle(style)
  }
  
  return (
    <InputContext.Provider
    value={{
    style:style,
    addBlock
    }}
  >
    {children}
  </InputContext.Provider>
  )
}

export default BlockContextProvider