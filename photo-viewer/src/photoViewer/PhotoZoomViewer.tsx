import './photoViewer.css' // importing css file

export function PhotoZoomViewer(props: { imageurl: string }) {    // declare and export new function called 'PhotoViewer'

    return (        
                
         <img className="zoomedImage" src={props.imageurl} alt={props.imageurl}></img>
            
        );
}

