import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import Table1 from './Table1';
import {Codecontext} from "../context/Codecontext"


function Buttonn(){
    const {code,setCode,setQuery} = useContext(Codecontext)
    const [flag, setFlag] = useState(false);
    const onClick2Handler = () => {
       
        setCode("Select * from Accounts;")
        setQuery(true) 
    }
    return<>
       
    <Button variant="contained" onClick={onClick2Handler}>Run Students</Button>
     <Table1/>
    </>
}
export default Buttonn;