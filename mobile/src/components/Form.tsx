import React, { useState } from 'react';
import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonItem, IonLabel, IonInput, useIonAlert } from '@ionic/react';

function Form() {
    const [isOpen, setIsOpen] = useState(false);
    const [presentAlert] = useIonAlert();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Inline Modal</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton expand="block" onClick={() => setIsOpen(true)}>
                    Open
                </IonButton>
                <IonModal isOpen={isOpen}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Login</IonTitle>
                            <IonButtons slot="end">
                                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <IonItem>
                            <IonLabel position="stacked">Entrer votre email</IonLabel>
                            <IonInput
                                type="text"
                                placeholder="exemple@gmail.com" />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Entrer votre mot de passe</IonLabel>
                            <IonInput
                                type="password"
                                placeholder="************" />
                        </IonItem>
                        <IonButton
                            expand="block"
                            onClick={() =>
                                presentAlert({
                                    header: 'Login',
                                    subHeader: '',
                                    message: 'Vous etes connecte !',
                                    buttons: ['OK'],
                                })
                            }>
                            Se connecter
                        </IonButton>

                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
}

export default Form;