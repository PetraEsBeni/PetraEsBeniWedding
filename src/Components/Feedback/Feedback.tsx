import React from "react";
import './Feedback.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import emailjs from 'emailjs-com';
import { FeedbackService } from "./FeedbackService";

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
            <div className="feedback-container">
                <div className="feedback-title">Visszajelzés</div>
                {this.state.isSubmitted ? (
                    <div className="success-message">
                        Sikeresen elküldte visszajelzését!
                    </div>
                ) : (
                    <form onSubmit={this.handleSubmit} className="feedback-form">
                        <div className="feedback-input-group">
                            <label htmlFor="name" className="feedback-label">Név: </label>
                            <input
                                id="name"
                                type="text"
                                value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })}
                                required
                                className="feedback-input"
                            />
                        </div>

                        <div className="feedback-input-group">
                            <label htmlFor="partnerName" className="feedback-label">Pár neve (opcionális): </label>
                            <input
                                id="partnerName"
                                type="text"
                                value={this.state.partnerName}
                                onChange={(e) => this.setState({ partnerName: e.target.value })}
                                className="feedback-input"
                            />
                        </div>

                        <div className="feedback-input-group feedback-children-section">
                            <label className="feedback-label">Gyerekek: </label>
                            {this.state.children.length === 0 ? (
                                <button className="children-add-button" type="button" onClick={this.addChild}>
                                    <FontAwesomeIcon icon={faPlus} /> Gyerek hozzáadása
                                </button>
                            ) : (
                                <div className="children-list">
                                    {this.state.children.map((child, index) => (
                                        <div key={index} className="add-children">
                                            <input
                                                type="text"
                                                className="children-name feedback-input"
                                                placeholder="Név"
                                                value={child.name}
                                                onChange={(e) => this.handleChildNameChange(index, e.target.value)}
                                                required
                                            />
                                            <input
                                                type="number"
                                                className="children-age feedback-input"
                                                placeholder="Kor"
                                                value={child.age}
                                                onChange={(e) => this.handleChildAgeChange(index, e.target.value)}
                                                required
                                            />
                                            <button className="children-icon-button" type="button" onClick={() => this.removeChild(index)}>
                                                <FontAwesomeIcon className="children-delete-icon" icon={faTimes} />
                                            </button>
                                        </div>
                                    ))}
                                    <button className="children-add-button" type="button" onClick={this.addChild}>
                                        <FontAwesomeIcon icon={faPlus} /> Gyerek hozzáadása
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="feedback-submit-button-container">
                            <button type="button" onClick={this.openModal} disabled={!this.state.name || this.state.isLoading} className="submit-button">
                                {this.state.isLoading ? 'Küldés folyamatban...' : 'Visszajelzés küldése'}
                            </button>
                        </div>
                    </form>
                )}

                {this.state.isModalOpen && (
                    <div className="feedback-modal-overlay">
                        <div className="feedback-modal">
                            <p>Biztosan el akarja küldeni a visszajelzést?</p>
                            <div className="modal-buttons">
                                <button onClick={this.handleSubmit} className="modal-button confirm-button" disabled={this.state.isLoading}>Igen</button>
                                <button onClick={this.closeModal} className="modal-button cancel-button" disabled={this.state.isLoading}>Nem</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
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
        FeedbackService.initJs();

        const { name, partnerName, children } = this.state;

        FeedbackService.sendFeedback(name, partnerName, children)
            .then(() => {
                this.setState({ isSubmitted: true, isModalOpen: false, isLoading: false });
            })
            .catch((error) => {
                console.error('Error sending feedback:', error);
                alert('Hiba történt a visszajelzés küldésekor. Kérjük, próbálja újra.');
                this.setState({ isModalOpen: false, isLoading: false });
            });

        console.log(
            this.state.name + " " +
            this.state.partnerName + " " +
            this.state.children.length
        );
    };
}