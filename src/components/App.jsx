import React, { useState } from "react";
import { Header} from "./Header.jsx";
import { Note} from "./Note.jsx"
import { Footer} from "./Footer.jsx";
import {CreateArea} from "./CreateArea";


function App(){
    const[notes,setNotes]=useState([]);
    function handleclick(note){
        setNotes( (previous_value)=>
            ( [...previous_value,note] )
        );
        
    }
    function deleteNote(id){  
        setNotes((previous_value)=>
        {
           return previous_value.filter( (element,index)=>(index!==id));
        }

        );
    }
    return( <div>
                <Header />
                <CreateArea 
                    handleclick={handleclick}
                />
               { notes.map( (element,index)=>(
                <Note 
                key={index} 
                id={index}
                title={element.title} 
                content={element.content}
                deleteNote={deleteNote} />
                ))}
                         
                <Footer />
            </div>  );
}

export { App};