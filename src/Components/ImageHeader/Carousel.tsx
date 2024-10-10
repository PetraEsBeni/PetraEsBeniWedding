import React, { useCallback, useEffect, useRef, useState } from "react";
import FirstImg from "./first.jpg";
import SecondImg from "./second.jpg";
import ThirdImg from "./third.jpg";

const images = [
    FirstImg,
    SecondImg,
    ThirdImg 
  ];


export class Carousel extends React.Component {
    public render(){
        return (
            <div className="carousel-container">
            <div className="carousel-wrapper">
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
    }
  }

