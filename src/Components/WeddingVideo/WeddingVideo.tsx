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
          <iframe
                src="https://drive.google.com/file/d/1KfLVpvvT85lIkpHNGt-AT1ie84m_q0L-/preview"
                title="Esküvői videó"
                allow="autoplay"
                allowFullScreen
            />
        </div>

      </div>
    );
  }
}