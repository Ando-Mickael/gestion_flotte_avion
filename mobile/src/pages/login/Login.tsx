import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    console.log("email : " + email);
    console.log("password : " + password);
    const url = "http://localhost:8080/login?email=" + email + "&mdp=" + password;

    axios.get(url).then((response) => {
      console.log(response.data);
      localStorage.setItem("entreprise", JSON.stringify(response.data));
    });
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Se connecter</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem>
          <IonLabel position='floating'>Email</IonLabel>
          <IonInput
            type="email"
            placeholder="example@mail.com"
            onIonInput={(e: any) => setEmail(e.target.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position='floating'>Mot de passe</IonLabel>
          <IonInput
            type="password"
            placeholder="************"
            onIonInput={(e: any) => setPassword(e.target.value)} />
        </IonItem>

        <IonButton
          expand="block"
          onClick={() => login()} >Continue</IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Login;
