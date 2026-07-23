import React from "react";
import "./WeddingHeroPhoto.css";
import GroupPhoto from "./groupPhoto.webp";

export class WeddingHeroPhoto extends React.Component {
    render() {
        return (
            <div className="hero-photo-container">
                <img
                    src={GroupPhoto}
                    alt="Esküvői csoportkép"
                    className="hero-photo"
                />
            </div>
        );
    }
}
         