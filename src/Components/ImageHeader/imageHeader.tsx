import React from "react";
import "./imageHeader.css";
import { Carousel } from "./Carousel";

export class ImageHeader extends React.Component {
    public render(){
        return (
            <div className="container">
               <Carousel/>
                <div className="text-overlay">
                    <img
                        src="/THELogoBolder.png"
                        alt="Logo"
                        className="header-logo"
                    />
                    <p className="Osszehazasodunk">Köszönjük, hogy velünk ünnepeltetek a Nagy napunkon!</p>
                </div>
            </div>
        )
    }
}