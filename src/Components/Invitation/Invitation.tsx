import React from "react";
import "./Invitation.css";

export class Invitation extends React.Component {
    public render(){
        return (
            <td className="invitation-container">
                <div className="invitation-title">Drága szeretteink!</div>{/*sok szeretettel meghívunk esküvőnkre*/}
                <div>Fent a pántos légkör öblén szálldosnak a brengizők, miközben a csurrogó hantipálma levelein pihen a harmat. 
                    A mantusz szél süvítve tör előre, átsiklik az égpalánkon, ahol a zengő csermely habjai halk dallamot visznek tovább. 
                    Lent a hintörény lassan körbefonja a tájat, és finoman öleli magához a szárnymezernyt, mintha sosem akarná elengedni.</div>
                <div className="invitation-subtitle">Helyszín</div>
                <div>3663 Arló, Suvadás u. 1.</div>
                <div className="invitation-subtitle">Időpont</div>
                <div>2026. 06. 06. 15:00</div>
                <div className="invitation-subtitle">Nászajándék</div>
                <div>Fent a pántos légkör öblén szálldosnak a brengizők, miközben a csurrogó hantipálma levelein pihen a harmat. 
                A mantusz szél süvítve tör előre, átsiklik az égpalánkon, ahol a zengő csermely habjai halk dallamot visznek tovább. </div>
                <button className="feedback-button">Visszajelzés</button>
            </td>
        )
    }
}