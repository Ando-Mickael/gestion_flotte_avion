import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonVirtualScroll } from '@ionic/react';
import axios from 'axios';
import { airplane, calendar, car, card } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import './Avion.css';
import avion1 from './img/avion.jpg';

const Avion: React.FC = () => {

    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    const [avion, setAvion] = useState([]);
    const [assurance, setAssurance] = useState([]);
    const [kilometrages, setKilometrages] = useState([]);
    const [entretiens, setEntretiens] = useState([]);

    function getAvion() {
        const url = "https://gestionflotteavionws-production.up.railway.app/avions/" + id;
        axios.get(url).then((response) => {
            setAvion(response.data);
        })
    }

    function getAssurance() {
        const url = "https://gestionflotteavionws-production.up.railway.app/assurance/" + id;
        axios.get(url).then((response) => {
            setAssurance(response.data);
        })
    }

    function getKilometrages() {
        const url = "https://gestionflotteavionws-production.up.railway.app/kilometrages/" + id;
        axios.get(url).then((response) => {
            setKilometrages(response.data);
        })
    }

    function getEntretiens() {
        const url = "https://gestionflotteavionws-production.up.railway.app/entretiens/" + id;
        axios.get(url).then((response) => {
            setEntretiens(response.data);
        })
    }

    useEffect(() => {
        getAvion();
        getAssurance();
        getKilometrages();
        getEntretiens();
    }, []);

    // const avion = {
    //     "id": 1,
    //     "nom": "Air Mad 01",
    //     "img": "avion.jpg"
    // };

    // const assurance = {
    //     "id": 1,
    //     "idAvion": 1,
    //     "dateAssurance": "2022-01-12",
    //     "dateExpiration": "2022-12-30"
    // };

    // const kilometrages = [
    //     {
    //         "id": 4,
    //         "idAvion": 2,
    //         "dateTrajet": "2022-02-01",
    //         "debutKm": 0.0,
    //         "finKm": 400.0
    //     },
    //     {
    //         "id": 5,
    //         "idAvion": 2,
    //         "dateTrajet": "2022-02-02",
    //         "debutKm": 0.0,
    //         "finKm": 500.0
    //     },
    //     {
    //         "id": 6,
    //         "idAvion": 2,
    //         "dateTrajet": "2022-02-03",
    //         "debutKm": 0.0,
    //         "finKm": 450.0
    //     }
    // ];

    // const entretiens = [
    //     {
    //         "id": 1,
    //         "idAvion": 1,
    //         "idTypeEntretien": 1,
    //         "dateEntretien": "2022-01-01",
    //         "nom": "Pneu"
    //     },
    //     {
    //         "id": 2,
    //         "idAvion": 1,
    //         "idTypeEntretien": 2,
    //         "dateEntretien": "2022-02-01",
    //         "nom": "Vidange"
    //     }
    // ];

    return (
        <>
            <IonCard>
                {avion.map((item) => {
                    return (
                        <>
                            <img alt="Photo d'avion" src={avion1} />
                            <IonCardHeader>
                                <IonCardTitle>{item["nom"]}</IonCardTitle>
                                <IonCardSubtitle>ID : {item["id"]}</IonCardSubtitle>
                            </IonCardHeader>
                        </>
                    );
                })}

                <IonCardContent>
                    {assurance.map((item) => {
                        return (
                            <p>
                                <IonIcon icon={card} slot="start" /> Assurance expiree le <b>{item["dateExpiration"]}</b>
                            </p>
                        );
                    })}
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
