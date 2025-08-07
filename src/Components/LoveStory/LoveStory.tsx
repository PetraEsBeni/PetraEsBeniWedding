import React from "react";
import './LoveStory.css';
import { Events } from "./EventsData";

export class LoveStory extends React.Component {

    render() {
        return (
            <div className="timeline-container">
                <div className="timeline-title">Szerelmünk története</div>
                <div className="timeline">
                    {Events.map((event, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                            <div className="timeline-content">
                                <img src={event.image} alt="event" className="timeline-image" />
                                <p className="timeline-desc">{event.desc}</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

}