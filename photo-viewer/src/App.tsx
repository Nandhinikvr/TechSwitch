import { useState } from 'react'
import './App.css'
import { PhotoViewer } from './photoViewer/PhotoViewer'
import {  imageUrls } from './photoViewer/Photo2'
import { PhotoZoomViewer } from './photoViewer/PhotoZoomViewer'


function App() {
  const impimageurls=imageUrls;
  console.log(impimageurls)
  const [url,setUrl] = useState("")
  console.log(url)
  return (
      <>
          <h1>React Photo Viewer</h1>
          <div>
            <PhotoZoomViewer imageurl={url}/>
          </div>
          <h2>Select Image</h2>
          <PhotoViewer imageurl={impimageurls} seturl={setUrl} />
      </>
  );
}

export default App
