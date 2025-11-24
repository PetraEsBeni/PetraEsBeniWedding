import React from "react";
import "./Invitation.css";
import { Feedback } from "../Feedback/Feedback";

interface IState {
    showFeedback: boolean;
}

export class Invitation extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            showFeedback: false
        };
    }

    private toggleFeedback = () => {
        this.setState(prevState => ({ showFeedback: !prevState.showFeedback }));
    }

    public render(){
        const { showFeedback } = this.state;
        return (
            <div className="invitation-container">
                <div className="invitation-title">Kedves Családunk és Barátaink!</div>
                <div>Úgy döntöttünk, hogy legalizáljuk azt, amit eddig is mindenki tudott: összetartozunk. </div>
                <div>Gyere, és ünnepelj velünk, hogy együtt tegyük emlékezetessé ezt a különleges napot!</div>
                <div className="invitation-subtitle">Dresscode</div>
                <div>Mosoly és tánckedv</div>
                <div className="invitation-subtitle">Helyszín</div>
                <div>3663 Arló, Suvadás u. 1.</div>
                <div className="invitation-subtitle">Időpont</div>
                <div>2026. 06. 06. 15:00</div>
                <div className="invitation-subtitle">Nászajándék</div>
                <div>Fent a pántos légkör öblén szálldosnak a brengizők, miközben a csurrogó hantipálma levelein pihen a harmat. 
                A mantusz szél süvítve tör előre, átsiklik az égpalánkon, ahol a zengő csermely habjai halk dallamot visznek tovább. </div>
                
                <button className="feedback-button" onClick={this.toggleFeedback}>
                    {showFeedback ? "Visszajelzés bezárása" : "Visszajelzés"}
                </button>

                {showFeedback && <Feedback />}
            </div>
        )
    }
}