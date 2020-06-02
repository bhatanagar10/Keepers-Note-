import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const[zoom,setZoom]=useState(false);
    const [note,setNote]=useState({
        title:"",
        content:""
    });
    function handlechange(event){
        const{name,value}=event.target;
        setNote( (previous_value)=>{
           if(name==="title") {
               return {
                   ...previous_value,
                   [name]:value
               };
           }
           else{
               return {
                   ...previous_value,
                   [name]:value
               };
           }
          }
       );
    }
    function handlezoom(){
      setZoom(true);
    }
    
    function show(event){
            props.handleclick(note);
            event.preventDefault();
            setNote({
                title:"",
                content:""
            });
    }

  return (
    <div>
      <form className="create-note">
          { (zoom)&&
           <input 
           onChange={handlechange} 
           name="title" 
           placeholder="Title" 
           value={note.title} />
           
           }
        
        <textarea 
        onClick={handlezoom} 
        onChange={handlechange} 
        name="content" 
        placeholder="Take a note..." 
        rows={zoom?3:1}
        value={note.content} />
        <Zoom in={zoom} >
           <Fab onClick={show }
           >
           <AddIcon />
           </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export {CreateArea};
