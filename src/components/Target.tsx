import {useState} from "react";
import "./Target.scss";

export function Target () {
    const [isPlayer, setIsPlayer] = useState(true);
    const [fade, setFade] = useState(true);

    function handleSwitch(val: boolean) {
        if (val === isPlayer) return;
        setFade(false);
        setTimeout(() => {
            setIsPlayer(val);
            setFade(true);
        }, 100); // même durée que la transition CSS
    }

    return (
        <div className="target">
            <h2>C'est pour toi si tu es ...</h2>
            <div className="line">
                <div className="player-line">
                    <div className={"player-arrow" + (!isPlayer ? " hidden" : "")}></div>
                    <h3 className={isPlayer ? "player-title-active" : "player-title"} onClick={() => handleSwitch(true)}>Joueur d'escape game</h3>
                </div>
                <div className="gm-line">
                    <div className={"gm-arrow" + (isPlayer ? " hidden" : "")}></div>
                    <h3 className={! isPlayer ? "gm-title-active" : "gm-title"} onClick={() => handleSwitch(false)}>Game master</h3>
                </div>
            </div>
            <div className="target-content">
                <div className={isPlayer ? "bonhommegauche" : "bonhommegauchedesac"}/>
                <div className="content-container">
                    {!isPlayer && (
                        <div className={`gamemaster-container fade${fade ? " show" : ""}`}>
                            <p>Donnez de la visibilité à vos salles :</p>
                            <p>Devenez partenaires et offrez à plus de joueurs l’occasion de les découvrir.</p>
                            <p>On s’occupe de former les équipes !</p>
                        </div>
                    )}
                    {isPlayer && (
                        <div className={`player-container fade${fade ? " show" : ""}`}>
                            <p>Besoin de nouvelles recrues pour ta prochaine mission ?</p>
                            <p>À la poursuite d’une salle mais personne pour t’accompagner ?</p>
                            <p>Tu cherches des joueurs pour ton premier Escape Game ?</p>
                            <p>On t’aide à former ton équipe !</p>
                        </div>
                    )}
                </div>
                <div className={!isPlayer ? "bonhommedroite" : "bonhommedroitedesac"}/>
            </div>
        </div>
    )
}