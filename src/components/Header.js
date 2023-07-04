import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{backgroundColor:'#8bc34a'}}position='sticky'>
                <Toolbar>
                    <NavLink to="/">
                    <Typography><LocalLibraryIcon /></Typography></NavLink>
                    <Tabs sx={{ml: "auto"}} textColor="inherit" indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/add" label='Add Product'/>
                        <Tab LinkComponent={NavLink} to="/books" label='Books'/>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;