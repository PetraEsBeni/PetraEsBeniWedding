import React from "react";
import "./Playlist.css";

export class Playlist extends React.Component {
    public render() {
        return (
            <div className="playlist-container">
                <div className="playlist-title">Esküvői Playlist</div>
                <div>Segíts nekünk inspirációt gyűjteni az esküvői zenékhez!<br/>
                    Az itt ajánlott dalokat továbbítjuk a DJ-nek,
                    aki ezek stílusa alapján állítja össze az esküvő zenei hangulatát.</div>
                <a
                    href="https://open.spotify.com/playlist/2uTZioArmDreH6SdTHO1SP?si=bc229e04a713413d&pt=f70fc1fb252007f3f3214ab16437e6ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="musicLink"
                >
                    🎶 Spotify Playlist 🎶
                </a>
            </div>
        );
    }
}