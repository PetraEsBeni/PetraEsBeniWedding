import React, { useCallback, useEffect, useRef, useState } from "react";
import { images } from "./Images";

type Viewport = "mobile" | "tablet" | "desktop";

interface IState {
  viewport: Viewport;
}

export class Carousel extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      viewport: this.getViewport()
    };
  }

  getViewport() {
    const width = window.innerWidth;
    if (width <= 600) return "mobile";
    if (width <= 1199) return "tablet";
    return "desktop";
  }

  handleResize = () => {
    const viewport = this.getViewport();
    if (viewport !== this.state.viewport) {
      this.setState({ viewport });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

    public render(){
       const { viewport } = this.state; 
       
        return (
            <div className="carousel-container">
            <div className="carousel-wrapper">
              {images.concat(images).map((image, index) => {
                const style = image[viewport];
                return (
                <div
                  className="carousel-slide"
                  key={index}
                  style={{ 
                    backgroundImage: `url(${image.src})` ,
                    backgroundPosition: style.backgroundPosition,
                    minWidth: style.minWidth
                  }}
                />
              )})}
            </div>
          </div>
        );
    }
  }

