import React from "react";
import "./TimeTable.css";

export class TimeTable extends React.Component {
    private events = [
        { time: "15:00", event: "Vendégvárás", icon: "🌸" },
        { time: "16:00", event: "Polgári szertartás", icon: "💍" },
        { time: "16:40", event: "Pezsgős gratuláció, ajándékok átadása és csoportfotózások", icon: "🥂" },
        { time: "19:00", event: "Vacsora", icon: "🍽️" },
        { time: "20:30", event: "Nyitótánc", icon: "🎵" },
        { time: "23:00", event: "Tortaceremónia", icon: "🎂" },
        { time: "00:00", event: "Menyecsketánc", icon: "💃" },
        { time: "00:30-tól", event: "Végtelen buli", icon: "🎉" },
    ];

    public render() {
        return (
            <div className="timeline-container">
                <div className="timeline-title">Menetrend</div>
                <div className="timeline">
                    {this.events.map((event, index) => (
                        <div key={index} className="events-row">
                            {index % 2 === 0 ?
                                <>
                                    <div className="events-column leftEvent">
                                        <div className="event-content-wrapper">
                                            <div className="timeline-event">{event.time}</div>
                                            <div className="timeline-icon">{event.icon}</div>
                                            <div className="timeline-event-name">{event.event}</div>
                                        </div>
                                    </div>
                                    <div className="events-column center-column dot-column">
                                        <div className="dot"></div>
                                    </div>
                                    <div className="events-column empty-column"></div>
                                </>
                                :
                                <>
                                    
                                    <div className="events-column empty-column"></div>
                                    <div className="events-column center-column dot-column">
                                        <div className="dot"></div>
                                    </div>
                                    <div className="events-column rightEvent">
                                        <div className="event-content-wrapper">
                                            <div className="timeline-event">{event.time}</div>
                                            <div className="timeline-icon">{event.icon}</div>
                                            <div className="timeline-event-name">{event.event}</div>
                                        </div>
                                    </div>
                                </>}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}