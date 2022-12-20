import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, informationCircle, person } from 'ionicons/icons';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Info from './pages/info/Info';
import ListeAvion from './pages/listeAvion/ListeAvion';
import Avion from './pages/avion/Avion';
import Form from './components/Form';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>

        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/vehicule">
            <Avion />
          </Route>
          <Route path="/listeAvion">
            <ListeAvion />
          </Route>

          <Route path="/exemple">
            <Form />
          </Route>
          
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Accueil</IonLabel>
          </IonTabButton>
          <IonTabButton tab="login" href="/login">
            <IonIcon icon={person} />
            <IonLabel>Se connecter</IonLabel>
          </IonTabButton>
          <IonTabButton tab="info" href="/info">
            <IonIcon icon={informationCircle} />
            <IonLabel>Informations</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
