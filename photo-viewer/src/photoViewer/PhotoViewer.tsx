import React from "react"; // import React (to provide access to TSX)
import './photoViewer.css' // importing css file

export function PhotoViewer(props: { imageurl: string[],seturl: React.Dispatch<React.SetStateAction<string>> }) {    // declare and export new function called 'PhotoViewer'

   return (
        props.imageurl.map((image: string) => (
                
          <img src={image} alt={image} onClick={()=>props.seturl(image)} ></img>
        ))
      
        );
}



