import React from "react";
import "./WeddingGallery.css";
import { galleryImages } from "./GalleryImages";

export class WeddingGallery extends React.Component {
    render() {
        return (
            <div className="gallery-section">

                <div className="gallery-title">
                    Esküvői pillanatok
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="gallery-item">
                             <img
                                src={image.src}
                                alt={`Esküvői kép ${index + 1}`}
                                className="gallery-image"
                                loading="lazy"
                              />
                        </div>
                    ))}
                </div>

                    
            </div>
        );
    }
}