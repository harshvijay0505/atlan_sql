import Header from './component/Headerr.js';
import './App.css';
import InputText from './component/InputText.js';
import Buttongroup from './component/Buttongroup.js';
import './component/Gridd.css';
import Ddetail from './component/Ddetails.js';
import { Divider } from "@react-md/divider";
import Typography from "@mui/material/Typography";
import Table1 from './component/Table1.js';
import Table2 from './component/Table2.js';
import {CodeProvider} from "./context/Codecontext"

function App() {
  return (
    <>
    <CodeProvider>
     <Header/>
     <Divider />
       <div className='leftpane'><Ddetail/></div>

       <div className='middlepane'>
         <Typography marginLeft={3} variant="h6" component="div" sx={{ flexGrow: 1 }} color="common.black">SQL Statement:</Typography>
         <Divider /><InputText/>
         <Buttongroup/>
         
       </div>

       <Typography align='center' variant="h6" component="div" sx={{ flexGrow: 1 }} color="common.black">Available Tables</Typography><Divider />
       <div className='rightpane'>

         <Typography marginTop={2} variant="p" component="div" sx={{ flexGrow: 1 }} color="common.black"><b>Students</b></Typography>
        <Table2/>

       <Typography variant="p" component="div" sx={{ flexGrow: 1 }} color="common.black"><b>Accounts</b></Typography>
       <Table1/></div>
       
       </CodeProvider>
       
    </>
   
  );
}

export default App;
