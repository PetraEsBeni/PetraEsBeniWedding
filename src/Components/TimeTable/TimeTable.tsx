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
            <td className="timeline-container">
                <div className="timeline-title">Menetrend</div>
                <div className="timeline">
                    <table className="events-table">
                        <tbody className="events-table-body">
                            {this.events.map((event, index) => (
                                <tr className="events-row">
                                    {index % 2 === 0 ?
                                        <>
                                            <td className="events-column leftEvent">
                                                <div key={`${index}-event`}>
                                                    <div className="timeline-event">{event.time}</div>
                                                    <div className="timeline-icon">{event.icon}</div>
                                                    <div className="timeline-event-name">{event.event}</div>
                                                </div>
                                            </td>
                                            <td className="events-column">
                                                <div key={`${index}-dot`} className="dot"></div>
                                            </td>
                                            <td className="events-column"></td>
                                        </>
                                        :
                                        <>
                                            <td className="events-column"></td>
                                            <td className="events-column">
                                                <div key={`${index}-dot`} className="dot"></div>
                                            </td>
                                            <td className="events-column rightEvent">
                                                <div key={`${index}-event`}>
                                                    <div className="timeline-event">{event.time}</div>
                                                    <div className="timeline-icon">{event.icon}</div>
                                                    <div className="timeline-event-name">{event.event}</div>
                                                </div>
                                            </td>
                                        </>}

                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </td>
        )
    }
}