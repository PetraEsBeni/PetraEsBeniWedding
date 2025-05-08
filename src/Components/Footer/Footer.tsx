import React from "react";
import './Footer.css';

export class Footer extends React.Component {
    public render(){
        return (
            <div className="footer">
                <div className="title">Alig várjuk, hogy együtt bulizzunk!</div>
                <div>Addig is bármi kérdésed lenne keress minket:</div>
                <div>Petra: <span className="phone-number">+36 20 449 31 70</span></div>
                <div>Beni: <span className="phone-number">+36 30 310 48 00</span></div>
            </div>
        )
    }
}