import React from "react";
import './LoveStory.css';
import { Events } from "./EventsData";

export class LoveStory extends React.Component {

    render() {
        return (
            <div className="lovestory-container">
                <div className="lovestory-title">Szerelmünk története</div>
                <div className="lovestory">
                    {Events.map((event, index) => (
                        <div key={index} className={`lovestory-item ${index % 2 === 0 ? "left" : "right"}`}>
                            <div className="lovestory-content">
                                <img src={event.image} alt="event" className="lovestory-image" />
                                <div>
                                    <div className="lovestory-event-title">{event.title}</div>
                                    <p className="lovestory-desc">{event.desc}</p>
                                </div>
                            </div>
                            <div className="lovestory-dot"></div> 
                        </div>
                    ))}
                </div>
                <div className="end-desc">
                    Most már minden adott, hogy 2026.06.06-án kimondjuk:
                    <span className="forever"> örökre.</span>
                </div>
            </div>
        );
    }
}