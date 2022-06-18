import React,{createContext,useState} from 'react'

const Codecontext = createContext(null)

function CodeProvider({children}) {
  const [code,setCode] = useState("Select * from  Students;")
  const [query,setQuery] = useState(false)
  const [show,setShow] = useState(false)
  return (
    <Codecontext.Provider value={{code,setCode,query,setQuery,show,setShow}}>
     {children}
    </Codecontext.Provider>
  )
}

export {Codecontext,CodeProvider}