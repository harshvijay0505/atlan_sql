// import Typography from "@mui/material/Typography";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "./atlan.svg"
import Avatar from '@mui/material/Avatar';
import './Logo.css';



export default function Header() {
return (
	<AppBar style={{ background: '#FFFFFF' }} position="static">
		<Toolbar>
        <img src={logo} alt="Logo" width={100}/>;
        <div className="logo">
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="common.black">Harsh Vijayvargiya</Typography> */}
            <Avatar>H</Avatar>
        </div>	    
  
        
		</Toolbar>
	</AppBar>
);
}


