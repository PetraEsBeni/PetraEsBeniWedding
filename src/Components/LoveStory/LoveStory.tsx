import React from "react";
import FirstImg from "./first.jpg";
import SecondImg from "./second.jpg";
import ThirdImg from "./third.jpg";
import './LoveStory.css';

export class LoveStory extends React.Component {
    private events = [
        { title: "Test", desc: "TestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdata", image: FirstImg },
        { title: "Test", desc: "TestdataTestdataTestdataTestdataTestdataTestdata", image: SecondImg },
        { title: "Test", desc: "TestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdata", image: ThirdImg },
        { title: "Test", desc: "TestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdata", image: FirstImg},
        { title: "Test", desc: "TestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdataTestdata", image: SecondImg },
    ];

    render() {
        return (
            <td className="lovestory-container">
                <div className="lovestory-title">Szerelmünk története</div>
                <div className="lovestory">
                    <table className="love-events-table">
                        <tbody className="love-events-table-body">
                            {this.events.map((event, index) => (
                                <tr className="love-events-row">
                                    {index % 2 === 0 ?
                                        <>
                                            <td className="love-events-column leftEvent">
                                                <div key={`${index}-event`}>
                                                    <div className="lovestory-event-left">{event.title}</div>
                                                    <div className="lovestory-event-box-left">
                                                        <img className="lovestory-image" src={event.image} />
                                                        <div className="lovestory-event-name">{event.desc}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="love-events-column">
                                                <div key={`${index}-dot`} className="dot"></div>
                                            </td>
                                            <td className="love-events-column"></td>
                                        </>
                                        :
                                        <>
                                            <td className="love-events-column"></td>
                                            <td className="love-events-column">
                                                <div key={`${index}-dot`} className="dot"></div>
                                            </td>
                                            <td className="love-events-column rightEvent">
                                                <div key={`${index}-event`}>
                                                    <div className="lovestory-event-right">{event.title}</div>
                                                    <div className="lovestory-event-box-right">
                                                        <img className="lovestory-image" src={event.image} />
                                                        <div className="lovestory-event-name">{event.desc}</div>
                                                    </div>
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