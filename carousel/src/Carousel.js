import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  const isFirstImage = currCardIdx === 0;
  const isLastImage = currCardIdx === 2;

  //Increments currCardIdx state by 1
  function goForward() {
    // if(currCardIdx === 2) {
    //   setCurrCardIdx(0)
    // }else{
    //   setCurrCardIdx(currCardIdx + 1);
    // }
    setCurrCardIdx(currCardIdx + 1);
    
  }

  function goBackward() {
    // if(currCardIdx === 0){
    //   setCurrCardIdx(2)
    // }else{
    //   setCurrCardIdx(currCardIdx - 1);
    // }
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {!isFirstImage && <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward}
        />}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {!isLastImage && <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
        />}
      </div>
    </div>
  );
}

export default Carousel;
