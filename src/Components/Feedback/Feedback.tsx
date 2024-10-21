import React from "react";
import './Feedback.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

export interface Child {
    name: string;
    age: string;
}

interface IState {
    name: string;
    partnerName: string;
    children: Child[];
}

export class Feedback extends React.Component<{}, IState> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            name: "",
            partnerName: "",
            children: []
        }
    }

    public render() {
        return (
            <td className="feedback-container">
                <div className="feedback-title">Visszajelzés</div>{/*sok szeretettel meghívunk esküvőnkre*/}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Név: </label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label>Pár neve (opcionális): </label>
                        <input
                            type="text"
                            value={this.state.partnerName}
                            onChange={(e) => this.setState({ partnerName: e.target.value })}
                        />
                    </div>

                    <div className="children-container">
                        <label className="children-label">Gyerekek: </label>
                        {this.state.children.length === 0 ?
                            <button type="button" onClick={this.addChild}>
                                Gyerek hozzáadása
                            </button> :
                            <>
                                {this.state.children.map((child, index) => (
                                    <div key={index} style={{ marginBottom: '10px' }}>
                                        <input
                                            type="text"
                                            className="children-name"
                                            placeholder="Név"
                                            value={child.name}
                                            onChange={(e) => this.handleChildNameChange(index, e.target.value)}
                                            required
                                        />
                                        <input
                                            type="number"
                                            className="children-age"
                                            placeholder="Kor"
                                            value={child.age}
                                            onChange={(e) => this.handleChildAgeChange(index, e.target.value)}
                                            required
                                        />
                                        <button className="children-button" type="button" onClick={() => this.removeChild(index)}>
                                            <FontAwesomeIcon className="children-delete-icon" icon={faTimes} />
                                        </button>
                                        <button className="children-button" type="button" onClick={this.addChild}>
                                            <FontAwesomeIcon className="children-add-icon" icon={faPlus} />
                                        </button>
                                    </div>
                                ))}
                            </>
                        }
                    </div>

                    <div>
                        <button type="submit">Küldés</button>
                    </div>
                </form>
            </td>
        )
    }

    // Gyerek hozzáadása
    private addChild = () => {
        var tempChildren = [...this.state.children];
        tempChildren.push({ name: "", age: "" });

        this.setState({
            children: tempChildren
        });
    };

    // Gyerek adatainak kezelése
    private handleChildNameChange = (index: number, value: string) => {
        var newChildren: Child[] = [...this.state.children];
        newChildren[index].name = value;

        this.setState({
            children: newChildren
        });
    };

    private handleChildAgeChange = (index: number, value: string) => {
        var newChildren: Child[] = [...this.state.children];
        newChildren[index].age = value;

        this.setState({
            children: newChildren
        });
    };

    // Gyerek eltávolítása
    private removeChild = (index: number) => {
        const newChildren = this.state.children.filter((_, i) => i !== index);
        this.setState({
            children: newChildren
        });
    };

    // Form küldése
    private handleSubmit = (event: any) => {
        event.preventDefault();
        // Form adatok feldolgozása (pl. küldés szerverre)
        console.log(
            this.state.name + " " +
            this.state.partnerName + " " +
            this.state.children.length
        );
    };
}