import {DownloadButton} from "./DownloadButton.tsx";
import {Person} from "./Person.tsx";
import "./Team.scss";
import {CardValue} from "./CardValue.tsx";

export function Team() {
    return (
        <div className="team-container" id="about">
            <DownloadButton isReverse={false} btnLabel={"Télécharger l'application"}/>
            <h2>L'équipe Melanjeux</h2>
            <p className="student-text">Étudiant.e.s à MyDigitalSchool Grenoble,  nous formons une équipe aussi diverse que soudée, par nos compétences comme par nos personnalités.</p>
            <div className="person-container">
                <Person imagePath={"/flo.svg"} name={"Florian"} role={"DESIGNER GRAPHIQUE"} nickname={"Le fonceur"}/>
                <Person imagePath={"/dylan.svg"} name={"Dylan"} role={"DÉVELOPPEUR"} nickname={"Le leader"}/>
                <Person imagePath={"/lea.svg"} name={"Léa"} role={"UX/UI DESIGNER"} nickname={"La résolveuse de problèmes"}/>
                <Person imagePath={"/luna.svg"} name={"Luna"} role={"Responsable marketing"} nickname={"La communicante"}/>
            </div>
            <div className="mission-container">
                <p>Et notre mission, c’est de vous aider à construire la votre.</p>
                <p>Mais pas n’importe comment.</p>
            </div>
            <div className="values-container">
                <CardValue title={"Partage 🤝🏽"} content={"Chacun son rôle, chacun sa force. Ensemble, on déverrouille tout."}/>
                <CardValue title={"Convivialité 🎈"} content={"Une bonne ambiance, des rencontres sympas, et des souvenirs à raconter."}/>
                <CardValue title={"Bienveillance 🧡"} content={"Ici, pas de jugement. Juste l’envie de s’amuser et de progresser ensemble."}/>
                <CardValue title={"Découverte 🧭"} content={"De nouveaux coéquipiers, pour de nouvelles missions à explorer."}/>
            </div>
        </div>
    )
}