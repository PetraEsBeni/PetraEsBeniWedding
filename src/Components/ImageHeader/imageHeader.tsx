import React from "react";
import "./imageHeader.css";
import { Carousel } from "./Carousel";

export class ImageHeader extends React.Component {
    public render(){
        return (
            <td className="container">
               <Carousel/>
                <div className="text-overlay">
                    <img
                        src="/THELogo.png"
                        alt="Logo"
                        className="header-logo"
                    />
                    <p className="Osszehazasodunk">Összeházasodunk!</p>
                </div>
            </td>
        )
    }
}