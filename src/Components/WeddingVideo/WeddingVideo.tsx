import React from "react";
import "./WeddingVideo.css";

export class WeddingVideo extends React.Component {
  render() {
    return (
      <div className="video-section">

        <div className="video-title">
          Esküvői videónk
        </div>

        <div className="video-description">
          Újra átélhetjük életünk egyik legszebb napját,
          amit most veletek is megosztunk.
        </div>

        <div className="video-wrapper">
          <video
            controls
            playsInline
            preload="metadata"
            poster="https://petraesbeniweddingvideo.netlify.app/thumbnail.webp"
          >
            <source src="https://petraesbeniweddingvideo.netlify.app/WeddingVideo.mp4" type="video/mp4" />
            A böngésződ nem támogatja a videó lejátszását.
          </video>
        </div>

      </div>
    );
  }
}