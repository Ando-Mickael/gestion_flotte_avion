import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Info.css';

const Info: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Groupe 26</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonList lines='none'>
        <IonItem>
          <IonLabel><b>ETU1464</b> # Ando</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel><b>ETU1506</b> # Mihoby</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel><b>ETU1449</b> # Michael</IonLabel>
        </IonItem>
        {/* <IonItem>
          <IonLabel><b>ETU1473</b> # Fetra</IonLabel>
        </IonItem> */}
      </IonList>
    </IonContent>
  </IonPage>
);

export default Info;
