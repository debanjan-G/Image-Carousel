import React, {useState, useEffect, useRef} from "react";
import {motion} from "framer-motion"
import imageArray from "../images";

function App() {
const [width,setWidth]=useState(0);
const carouselInfo=useRef();
useEffect(()=>{
  setWidth(carouselInfo.current.scrollWidth-carouselInfo.current.offsetWidth);
},[])
  return (
    <div className="App">
    <h1>The 5 Most Beautiful Places in the World</h1>
      <div className="carousel" ref={carouselInfo}>
        <motion.div drag="x" dragConstraints={{right:0,left:-width}} className="inner-carousel">
{imageArray.map(image=> <motion.div className="items"><img src={image.src} alt="" key={image}></img><figcaption>{image.caption}</figcaption></motion.div>
)}
        </motion.div>
      </div>

    </div>
  );
}

export default App;
