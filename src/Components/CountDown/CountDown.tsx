import React from "react";
import "./CountDown.css";

interface IState {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export class CountDown extends React.Component<{}, IState>{
    timer: NodeJS.Timeout | undefined; 

    public constructor(props: {}){
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentDidMount() {
        const targetDate = new Date("2026-06-06T15:00:00").getTime();
    
        this.timer = setInterval(() => {
          const now = new Date().getTime();
          const distance = targetDate - now;
    
          if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            this.setState({ days, hours, minutes, seconds });
          } else {
            clearInterval(this.timer);
          }
        }, 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.timer);
      }
    
      render() {
        const { days, hours, minutes, seconds } = this.state;
    
        return (
            <td className="countdown">
                <div className="countdown-title">Visszaszámlálás</div>
                <div className="counter-container">
                    <div className="time">
                        <div className="time-box">
                            <p>{days}</p>
                            <span>Nap</span>
                        </div>
                        <div className="time-box">
                            <p>{hours}</p>
                            <span>Óra</span>
                        </div>
                        <div className="time-box">
                            <p>{minutes}</p>
                            <span>Perc</span>
                        </div>
                        <div className="time-box">
                            <p>{seconds}</p>
                            <span>Másodperc</span>
                        </div>
                    </div>
                </div>
            </td>
        );
      }
}