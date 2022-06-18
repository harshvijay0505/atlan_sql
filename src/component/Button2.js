import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import Table2 from './Table2';
import {Codecontext} from "../context/Codecontext"

function Button2(){
    const [flag, setFlag] = useState(false);
    const {code,setCode,setQuery} = useContext(Codecontext)
    const onClickHandler = () => {
    
        setCode("Select * from Students;")
        setQuery(false)
        setFlag(true)
        console.log(flag)
    }
    
    return<>
       
    <Button variant="contained" onClick={onClickHandler}>Run Accounts</Button>
    <Table2/>

    </>
}
export default Button2;