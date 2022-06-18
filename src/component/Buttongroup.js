import React, { useContext } from 'react'
import Buttonn from './Buttonn'
import Button2 from './Button2'
import {Codecontext} from "../context/Codecontext"
function Buttongroup() {
    const {query} = useContext(Codecontext)
    
  return (
    <>
    {query?<Button2/>: <Buttonn/>}
    
   
    </>
  )
}

export default Buttongroup

