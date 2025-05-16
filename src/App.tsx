import './App.scss'
import {Navbar} from "./components/Navbar.tsx";
import {DownloadButton} from "./components/DownloadButton.tsx";
import {Target} from "./components/Target.tsx";
import {Team} from "./components/Team.tsx";

function App() {

  return (
    <div className="app-content">
      <Navbar/>
        <div className="jumbo">
            <img src="/logo.svg" alt="LogoEntier"/>
            <h1 className="catcher">Te trouver l'équipe parfaite, c'est notre enjeu.</h1>
            <div className="h3-container">
                <h3>Le vrai défi devrait être dans la salle, pas avant. </h3>
                <h3>Laisse notre application trouver tes partenaires d’Escape Game.</h3>
            </div>
            <DownloadButton btnLabel="Je rejoins l'aventure" isReverse={false}/>
        </div>
        <Target/>
        <Team/>
    </div>
  )
}

export default App
