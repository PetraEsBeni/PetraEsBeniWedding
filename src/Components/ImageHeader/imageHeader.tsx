import React from "react";
import "./imageHeader.css";
import myImage from "./first.jpg"

export class ImageHeader extends React.Component {
    public render(){
        return (
            <td>
                <div className="image-section">
                    <img src={myImage} alt="Hátterkép" className="background-image"/>
                </div>
                <div className="text-overlay">
                    <h1 className="PetraAndBeni">Petra és Beni</h1>
                    <p className="Osszehazasodunk">Összeházasodunk!</p>
                    <p className="Datum">2026.06.06.</p>
                </div>
            </td>
        )
    }
}