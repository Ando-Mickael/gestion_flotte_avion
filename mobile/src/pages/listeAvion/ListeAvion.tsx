import './ListeAvion.css';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { car } from 'ionicons/icons';
import axios from 'axios';
import { useState } from 'react';

const ListeAvion: React.FC = () => {

    // const [liste, setListe] = useState([]);
    // const [verif, setVerif] = useState(false);

    const url = new URL(window.location.href);
    const id = url.searchParams.get("nbMois");

    // if (!verif) {
    //     const url = "http://localhost:8080/delaiAssurance/" + nbMois;
    //     axios.get(url).then((response) => {
    //         console.log(response.data);
    //         setListe(response.data);
    //         setVerif(true);
    //     })
    // }

    const avions = [
        {
            "id": 1,
            "idAvion": 1,
            "diffJour": 10,
            "nom": "Air Mad 01"
        },
        {
            "id": 2,
            "idAvion": 2,
            "diffJour": 11,
            "nom": "Air Mad 02"
        },
        {
            "id": 3,
            "idAvion": 3,
            "diffJour": 71,
            "nom": "Air Austral 01"
        }
    ];

    console.log(avions);

    return (
        <>
            {avions.map((avion: any) => {
                console.log(avion);
                const tmp: string = "/vehicule?id=" + avion["idAvion"];

                return (
                    <IonItem href={tmp} detail={true}>
                        <IonLabel>
                            <IonIcon icon={car} slot="start"></IonIcon> {avion["nom"]}
                        </IonLabel>
                    </IonItem>
                );
            })}
        </>
    );

};

export default ListeAvion;
