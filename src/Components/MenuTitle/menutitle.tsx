import React from "react";
import "./menutitle.css";

export class MenuTitle extends React.Component {
    public render(){
        return (
            <div className="header">
                <span>Petra & Beni</span>
                <button className="button">Gomb</button>
            </div>
        )
    }
}
