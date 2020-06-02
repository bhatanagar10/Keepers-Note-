import React from "react";

const date=new Date();
const year=date.getFullYear();

function Footer(){
    return(  <footer>
              <p>CopyRright © { year}</p>
              </footer>);
}

export { Footer};