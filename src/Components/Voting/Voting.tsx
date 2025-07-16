import React from "react";
import { VotingImages } from "./ImageData";
import { VotingService } from "../../Services/VoteService";
import { getAuth, signInAnonymously } from "firebase/auth";
import './Voting.css';

interface VotingState {
    votes: Record<number, number>;
    hasVoted: boolean;
    userId: string;
    votedImageId: number | null;
    isAdmin: boolean;
}

export class Voting extends React.Component<{}, VotingState> {
    private readonly ADMIN_UID = "kzXUEyAHJ6gGyDjXsvy4cdqp5bn1";

    constructor(props: {}) {
        super(props);
        this.state = {
            votes: {},
            hasVoted: localStorage.getItem('hasVoted') === 'true',
            userId: localStorage.getItem('userId') || '',
            votedImageId: Number(localStorage.getItem('votedImageId')) || null,
            isAdmin: false
        };
    }

    async componentDidMount() {
        const auth = getAuth();
        if (!auth.currentUser) {
            await signInAnonymously(auth);
        }

        const userId = auth.currentUser!.uid;
        const isAdmin = userId === this.ADMIN_UID;
        
        localStorage.setItem('userId', userId);
        this.setState({ userId, isAdmin });

        if (isAdmin) {
            const votes = await VotingService.getAllVotes(VotingImages);
            this.setState({ votes });
        }
    }

    handleVote = async (imageId: number) => {
        if (!this.state.hasVoted) {
            try {
                const auth = getAuth();
                if (!auth.currentUser) {
                    await signInAnonymously(auth);
                }

                await VotingService.addVote(imageId, auth.currentUser!.uid);
                
                if (this.state.isAdmin) {
                    this.setState(prevState => ({
                        votes: {
                            ...prevState.votes,
                            [imageId]: (prevState.votes[imageId] || 0) + 1
                        },
                        hasVoted: true,
                        votedImageId: imageId
                    }));
                } else {
                    this.setState({
                        hasVoted: true,
                        votedImageId: imageId
                    });
                }
                
                localStorage.setItem('hasVoted', 'true');
                localStorage.setItem('votedImageId', imageId.toString());
            } catch (error: any) {
                if (['cancelled', 'aborted'].includes(error.code)) {
                    return;
                }
                console.error('Kritikus hiba:', error.message);
            }
        }
    }

    handleDeleteVote = async () => {
        if (this.state.votedImageId && window.confirm('Biztosan törölni szeretnéd a szavazatodat?')) {
            try {
                const auth = getAuth();
                if (!auth.currentUser) {
                    await signInAnonymously(auth);
                }

                await VotingService.deleteVote(this.state.votedImageId, auth.currentUser!.uid);
                
                if (this.state.isAdmin) {
                    this.setState(prevState => ({
                        votes: {
                            ...prevState.votes,
                            [this.state.votedImageId!]: prevState.votes[this.state.votedImageId!] - 1
                        },
                        hasVoted: false,
                        votedImageId: null
                    }));
                } else {
                    this.setState({
                        hasVoted: false,
                        votedImageId: null
                    });
                }
                
                localStorage.removeItem('hasVoted');
                localStorage.removeItem('votedImageId');
            } catch (error: any) {
                if (['cancelled', 'aborted'].includes(error.code)) {
                    return;
                }
                console.error('Kritikus hiba:', error.message);
            }
        }
    }

    render() {
        return (
            <td className="voting-container">
                <h1 className="question">Neked melyik a kedvenced?</h1>
                <p className="flex-lines">
                    <span>Tanácstalanok vagyunk melyik logó illene a legjobban hozzánk, segíts nekünk!</span>
                    <span>Csak egy logóra szavazhatsz, kérlek ne játszd ki a rendszert! 😄</span>
                </p>
                <div className="image-grid">
                    {VotingImages.map((image) => (
                        <div key={image.id} className="image-card">
                            <img
                                src={image.url}
                                alt={image.alt}
                                className={`${this.state.hasVoted ? 'disabled' : ''} 
                                          ${this.state.votedImageId === image.id ? 'voted' : ''}`}
                            />
                            <div className="vote-section">
                                <button
                                    onClick={() => this.handleVote(image.id)}
                                    disabled={this.state.hasVoted}
                                    className={this.state.votedImageId === image.id ? 'voted-button' : ''}
                                >
                                    {this.state.votedImageId === image.id ? 'Szavazatod ✓' : 'Szavazás'}
                                    {this.state.isAdmin && ` (${this.state.votes[image.id] || 0})`}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {this.state.hasVoted && (
                    <div className="vote-controls">
                        <p className="vote-message">Köszönjük a segítséged!</p>
                    </div>
                )}
                <button
                    className={this.state.hasVoted ? "delete-vote-button" : "delete-vote-button-disabled"}
                    onClick={this.handleDeleteVote}
                    disabled={!this.state.hasVoted}
                >
                    🗑️ Szavazat törlése
                </button>
            </td>
        );
    }
}