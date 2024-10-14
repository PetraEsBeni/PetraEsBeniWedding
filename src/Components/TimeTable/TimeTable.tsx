import React from "react";
import "./TimeTable.css";

export class TimeTable extends React.Component{
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
            <td className="timeline">
            {this.events.map((event, index) => (
                <div key={index}>
                    <div key={`${index}-dot`} className="dot"></div>
                    <div key={`${index}-event`} className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}>
                        <div className="timeline-time">{event.time}</div>
                        <div className="timeline-icon">{event.icon}</div>
                        <div className="timeline-event-name">{event.event}</div>
                    </div>
                </div>
            ))}
          </td>
        )
    }
}