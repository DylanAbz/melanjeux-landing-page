import {DownloadButton} from "./DownloadButton.tsx";
import "./Navbar.scss";

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/logom.svg" alt="Logo" />
            </div>
            <div className="navbar-menu">
                <a href="#who">Pour qui ?</a>
                <a href="#about">À propos de nous</a>
                <DownloadButton btnLabel="Télécharger" isReverse={true}/>
            </div>
        </nav>
    );
}