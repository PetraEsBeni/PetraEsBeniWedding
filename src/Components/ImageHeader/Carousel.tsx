import React, { useCallback, useEffect, useRef, useState } from "react";
import FirstImg from "./first.jpg";
import SecondImg from "./second.jpg";
import ThirdImg from "./third.jpg";

const images = [
    FirstImg,
    SecondImg,
    ThirdImg 
  ];


const Carousel: React.FC = () => {
    const [looperInstances, setLooperInstances] = useState(3);
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    function resetAnimation() {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "false");
    
          setTimeout(() => {
            if (innerRef?.current) {
              innerRef.current.setAttribute("data-animate", "true");
            }
          }, 50);
        }
      }
      
    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const { width } = innerRef.current.getBoundingClientRect();

        const { width: parentWidth } = outerRef.current.getBoundingClientRect();

        const instanceWidth = width / innerRef.current.children.length;

        if (width < parentWidth + instanceWidth) {
            setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
        }
        resetAnimation();
  }, [looperInstances]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  
    return (
        <div className="carousel-container" ref={outerRef}>
        <div className="carousel-wrapper" ref={innerRef}>
          {images.concat(images).map((image, index) => (
            <div
              className="carousel-slide"
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
    );
  };
  
export default Carousel;

