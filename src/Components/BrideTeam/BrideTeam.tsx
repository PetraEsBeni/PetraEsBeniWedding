import React from "react";
import "./BrideTeam.css";
import { Bridesmaids } from "./BridesmaidsData";

export class BrideTeam extends React.Component {
    render() {
        return (
            <div className="brideteam-container">
                <div className="brideteam-title">The Bride Team</div>
                <div className="brideteam-list">
                    {Bridesmaids.map((bm, index) => (
                        <div
                            key={index}
                            className={`brideteam-item ${index % 2 === 0 ? "left" : "right"}`}
                        >
                            <img src={bm.image} alt={bm.name} className="brideteam-image" />
                            <div className="brideteam-text">
                                <div className="brideteam-name">{bm.name}</div>
                                <p className="brideteam-desc">{bm.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
