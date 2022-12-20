import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import axios from 'axios';
import { airplane, calendar, car, card } from 'ionicons/icons';
import { useState } from 'react';
import './Avion.css';
import avion1 from './img/avion1.jpg';

const Avion: React.FC = () => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    console.log("idAvion : " + id);

    // const [avion, setAvion] = useState({});
    // const [entretien, setEntretien] = useState({});
    // const [kilometrages, setKilometrages] = useState([]);

    // const [assurance, setAssurance] = useState([]);
    // const [verif, setVerif] = useState(false);

    const avion = {
        "id": 1,
        "nom": "Air Mad 01",
        "img": "avion.jpg"
    };

    const assurance = {
        "id": 1,
        "idAvion": 1,
        "dateAssurance": "2022-01-12",
        "dateExpiration": "2022-12-30"
    };

    const kilometrages = [
        {
            "id": 4,
            "idAvion": 2,
            "dateTrajet": "2022-02-01",
            "debutKm": 0.0,
            "finKm": 400.0
        },
        {
            "id": 5,
            "idAvion": 2,
            "dateTrajet": "2022-02-02",
            "debutKm": 0.0,
            "finKm": 500.0
        },
        {
            "id": 6,
            "idAvion": 2,
            "dateTrajet": "2022-02-03",
            "debutKm": 0.0,
            "finKm": 450.0
        }
    ];

    const entretiens = [
        {
            "id": 1,
            "idAvion": 1,
            "idTypeEntretien": 1,
            "dateEntretien": "2022-01-01",
            "nom": "Pneu"
        },
        {
            "id": 2,
            "idAvion": 1,
            "idTypeEntretien": 2,
            "dateEntretien": "2022-02-01",
            "nom": "Vidange"
        }
    ];

    // if (!verif) {
    //     const url = "http://localhost:8080/infoVehicule/" + id;
    //     axios.get(url).then((response) => {
    //         setVehicule(response.data.vehicule);
    //         setKilometrages(response.data.kilometrages);
    //         setAssurance(response.data.assurance);
    //         setVerif(true);
    //     })
    // 

    return (
        <>
            <IonCard>
                <img alt="Photo d'avion" src={avion1} />
                <IonCardHeader>
                    <IonCardTitle>{avion["nom"]}</IonCardTitle>
                    <IonCardSubtitle>ID : {avion["id"]}</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    <p>
                        <IonIcon icon={card} slot="start" /> Assurance expiree le <b>{assurance["dateExpiration"]} j</b>
                    </p>
                </IonCardContent>
            </IonCard>

            <>
                <IonList>
                    <>
                        <IonListHeader lines="inset">
                            <IonLabel>Entretien</IonLabel>
                        </IonListHeader>
                        {entretiens.map((entretien) => {
                            return (
                                <IonItem>
                                    <IonLabel>
                                        <h2>{entretien["nom"]}</h2>
                                        <p>{entretien["dateEntretien"]}</p>
                                    </IonLabel>
                                </IonItem>
                            );
                        })}
                    </>
                </IonList>

                <IonList>
                    <>
                        <IonListHeader>
                            <IonLabel>Kilometrages</IonLabel>
                        </IonListHeader>
                        {kilometrages.map((kilometrage) => {
                            const tmp = kilometrage["debutKm"] + " km - " + kilometrage["finKm"] + " km";
                            return (
                                <IonItem>
                                    <IonLabel>
                                        <h2>{kilometrage["dateTrajet"]}</h2>
                                        <p>{tmp}</p>
                                    </IonLabel>
                                </IonItem>
                            );
                        })}
                    </>
                </IonList>
            </>
        </>
    );
};

export default Avion;
