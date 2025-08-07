import React from "react";
import "./TimeTable.css";

export class TimeTable extends React.Component {
    private events = [
        { time: "5:45 - 6:15 P.M.", event: "Ceremony", icon: "💍" },
        { time: "7:00 - 7:15 P.M.", event: "Sunset Photos", icon: "📷" },
        { time: "7:35 - 7:45 P.M.", event: "Welcome Toasts", icon: "🥂" },
        { time: "7:45 - 8:30 P.M.", event: "Dinner", icon: "🍽️" },
        { time: "8:30 - 9:30 P.M.", event: "Dance", icon: "🎶" },
        { time: "9:30 - 9:45 P.M.", event: "Cake Cutting", icon: "🎂" },
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