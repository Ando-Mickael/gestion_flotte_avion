import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { airplane, remove, reorderThree } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {

  const entreprise = localStorage.getItem("entreprise");
  if (entreprise == null) {
    console.log("connected");
  } else {
    console.log("is connected");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Avions</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          <IonItem href="/listeAvion" detail={true}>
            <IonIcon icon={airplane} slot="start"></IonIcon>
            <IonLabel>Tout</IonLabel>
          </IonItem>
          <IonItem href="/listeAvion" detail={true}>
            <IonIcon icon={remove} slot="start"></IonIcon>
            <IonLabel>Dans 1 mois</IonLabel>
          </IonItem>
          <IonItem href="/listeAvion" detail={true}>
            <IonIcon icon={reorderThree} slot="start"></IonIcon>
            <IonLabel>Dans 3 mois</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
