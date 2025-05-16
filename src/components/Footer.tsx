import {DownloadButton} from "./DownloadButton.tsx";
import "./Footer.scss";

export function Footer() {
    return (
        <div className="footer-container">
            <h2>Curieux d'en savoir plus sur notre projet ?</h2>
            <div className="p-container">
                <p>On est impatients de partager tout ça avec vous !</p>
                <p>Contactez-nous pour échanger et découvrir comment faire partie de l’aventure.🕵🏻</p>
            </div>
            <DownloadButton isReverse={false} btnLabel={"Je rejoins l'aventure"}/>
            <p>📩 contactmelanjeux@gmail.com</p>
            <img src="/logo.svg" alt="LogoEntier"/>
        </div>
    )
}