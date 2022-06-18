import React,{useContext} from 'react'
import Table1 from './Table1'
import Table2 from './Table2'
import {Codecontext} from "../context/Codecontext"
function Output() {
  const {} = useContext()
  return (
    <>
    <Table1/>
    <Table2/>
    </>
  )
}

export default Output