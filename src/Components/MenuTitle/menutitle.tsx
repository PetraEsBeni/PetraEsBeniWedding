import React from "react";
import "./menutitle.css";

export class MenuTitle extends React.Component {
    public render(){
        return (
            <div className="header">
                <span className="title">
                    {/*<img
                        src="/logo_white_trans.png"
                        alt="Logo"
                        className="header-logo"
                    />*/}
                    Petra & Beni
                    </span>
            </div>
        )
    }
}
