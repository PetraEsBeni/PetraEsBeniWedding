import React from "react";
import "./header.css";

export class Header {
    public render(){
        return (
            <div>
                <div className="text-overlay">
                    <h1>Petra és Beni 2026</h1>
                </div>

                <div className="image-section">
                    <img src="first.jpg" alt="Hátterkép" className="background-image"/>
                </div>
            </div>
        )
    }
}