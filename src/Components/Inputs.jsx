import React, { useContext } from 'react'
import { useState} from 'react'
import Form from "react-bootstrap/Form";
import { InputContext } from '../BlockContext';

const Inputs = () => {
    const { addBlock } = useContext(InputContext);

    const [width,setWidth] = useState('')
    const [height,setHeight] = useState('')

    const [color,setColor] = useState('')

function blockStyle(){
    let Obj ={
        width,
        height,
        color
    }
    addBlock(Obj)
}
  return (
    <>
     <Form.Control
        size="lg"
        type="text"
        placeholder="width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
        <Form.Control
        size="lg"
        type="text"
        placeholder="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
        <Form.Control
        size="lg"
        type="text"
        placeholder="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={blockStyle}>Create</button>
    </>
  )
}

export default Inputs