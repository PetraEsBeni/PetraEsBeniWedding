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
        return (
            <div className="invitation-container">
                <div className="invitation-title">Kedves Családunk és Barátaink!</div>
                <div>
                    Úgy döntöttünk, hogy legalizáljuk azt, amit eddig is mindenki tudott: 
                    <span className="together"> Összetartozunk.</span> <br/>
                    Gyere, és ünnepelj velünk, hogy együtt tegyük emlékezetessé ezt a különleges napot!
                </div>
                <div className="invitation-subtitle">Dresscode</div>
                <div>Mosoly és tánckedv</div>
                <div className="invitation-subtitle">Helyszín</div>
                <div>Arló, Suvadás liget</div>
                <div className="invitation-subtitle">Időpont</div>
                <div>2026. 06. 06. 15:00</div>
                
            </div>
        )
    }
}