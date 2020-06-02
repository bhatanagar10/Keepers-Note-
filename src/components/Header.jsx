import React from "react";
import MenuBookIcon from '@material-ui/icons/MenuBook';

function Header(){
    return(  <header>
              <h1><MenuBookIcon 
                  fontSize="large"
              /> Keeper Name</h1>
              </header>);
}

export { Header};