import React from "react";
import "./ThankYou.css";

export class ThankYou extends React.Component {
    render() {
        return (
            <div className="thank-you-container">

                <div className="thank-you-title">
                    Köszönjük!
                </div>

                <div className="thank-you-text">
                    Hálásak vagyunk, hogy velünk ünnepeltétek
                    életünk egyik legszebb napját.🤍
                    <br/>
                    Rengeteg szeretetet, mosolyt és felejthetetlen
                    pillanatot kaptunk Tőletek.
                    <br /><br />
                    Összegyűjtöttük a kedvenc emlékeinket,
                    hogy bármikor újra átélhessük ezt a csodálatos napot.
                </div>

            </div>
        );
    }
}