import React from "react";
import './Feedback.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import emailjs from 'emailjs-com';

export interface Child {
    name: string;
    age: string;
}

interface IState {
    name: string;
    partnerName: string;
    children: Child[];
    isModalOpen: boolean;
    isSubmitted: boolean;
    isLoading: boolean;
}

export class Feedback extends React.Component<{}, IState> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            name: "",
            partnerName: "",
            children: [],
            isModalOpen: false,
            isSubmitted: false,
            isLoading: false
        }
    }

    public render() {
        return (
            <td className="feedback-container">
                <div className="feedback-title">Visszajelzés</div>
                {this.state.isSubmitted ? (
                    <div className="success-message">
                        Sikeresen elküldte visszajelzését!
                    </div>
                ) : (
                    <form onSubmit={this.handleSubmit} className="feedback-form">
                        <div className="feedback-input-container">
                            <label className="feedback-label">Név: </label>
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="feedback-input-container">
                            <label className="feedback-label">Pár neve (opcionális): </label>
                            <input
                                type="text"
                                value={this.state.partnerName}
                                onChange={(e) => this.setState({ partnerName: e.target.value })}
                            />
                        </div>

                        <div className="feedback-input-container feedback-child-input">
                            <label className="feedback-label">Gyerekek: </label>
                            {this.state.children.length === 0 ? (
                                <button className="children-button" type="button" onClick={this.addChild}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            ) : (
                                <div>
                                    {this.state.children.map((child, index) => (
                                        <div key={index} className="add-children">
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
                                </div>
                            )}
                        </div>

                        <div>
                            <button type="button" onClick={this.openModal} disabled={!this.state.name}>Visszajelzés küldése</button>
                        </div>
                    </form>
                )}

                {this.state.isModalOpen && (
                    <div className="feedback-modal-overlay">
                        <div className="feedback-modal">
                            <p>Biztosan el akarja küldeni a visszajelzést?</p>
                            {this.state.isLoading ? (
                                <div className="spinner">Küldés folyamatban...</div> // Spinner megjelenítése
                            ) : (
                                <>
                                    <button onClick={this.handleSubmit}>Igen</button>
                                    <button onClick={this.closeModal}>Nem</button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </td>
        )
    }

    private addChild = () => {
        var tempChildren = [...this.state.children];
        tempChildren.push({ name: "", age: "" });

        this.setState({
            children: tempChildren
        });
    };

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

    private removeChild = (index: number) => {
        const newChildren = this.state.children.filter((_, i) => i !== index);
        this.setState({
            children: newChildren
        });
    };

    private openModal = () => {
        this.setState({ isModalOpen: true });
    };

    private closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    private handleSubmit = (event: any) => {
        event.preventDefault();
        this.setState({ isLoading: true });

        emailjs.init('ZCVVbW_74u-qXVJRl');

        const partner = this.state.partnerName ? this.state.partnerName : "-";
        var children = "";
        for (var child of this.state.children) {
            const childData = "Név: " + child.name + ", Kor: " + child.age + "\n";
            children += childData;
        }

        const emailContent = `
        Visszajelző neve: ${this.state.name}
        Visszajelző párja: ${partner}
        Gyerekek:\n ${children}
      `;

        emailjs
            .send('service_3j1l9ki', 'template_2w8lh99', {
                message: emailContent
            })
            .then(
                 (result) => {
                    console.log('Success:', result.text);
                    this.setState({ isSubmitted: true, isModalOpen: false, isLoading: false });
                },
                (error) => {
                    console.log('Error:', error.text);
                    this.setState({ isModalOpen: false, isLoading: false });
                }
            );

        console.log(
            this.state.name + " " +
            this.state.partnerName + " " +
            this.state.children.length
        );
    };
}