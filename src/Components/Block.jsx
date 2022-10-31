import React, { useContext } from 'react'
import { InputContext } from '../BlockContext';   

const Block = () => {
    const { style } = useContext(InputContext);

  return (
    <>
<div style={{width: style.width,height: style.height,backgroundColor:style.color}}></div>
    </>
  )
}

export default Block