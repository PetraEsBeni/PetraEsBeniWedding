import React from "react";
import "./GalleryLink.css";

export class GalleryLinks extends React.Component {
    render() {
        return (
            <div className="gallery-links-section">
                <a
                    href="https://drive.google.com/drive/folders/12r31LS-4ejjwUmEDfBek2zJdTaqJjkxP?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gallery-link-button"
                >
                    📸 Teljes fotógaléria megnyitása
                </a>

            </div>
        );
    }
}