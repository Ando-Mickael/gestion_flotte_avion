import './ListeAvion.css';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { car } from 'ionicons/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ListeAvion: React.FC = () => {

    const url = new URL(window.location.href);
    const nbMois = url.searchParams.get("nbMois");
    
    const [avions, setAvions] = useState([]);

    function getAvions() {
        const url = "https://gestionflotteavionws-production.up.railway.app/delaiAssurance/" + nbMois;
        axios.get(url).then((response) => {
            setAvions(response.data);
        })
    }

    useEffect(() => {
        getAvions();
    }, []);

    // const avions = [
    //     {
    //         "id": 1,
    //         "idAvion": 1,
    //         "diffJour": 10,
    //         "nom": "Air Mad 01"
    //     },
    //     {
    //         "id": 2,
    //         "idAvion": 2,
    //         "diffJour": 11,
    //         "nom": "Air Mad 02"
    //     },
    //     {
    //         "id": 3,
    //         "idAvion": 3,
    //         "diffJour": 71,
    //         "nom": "Air Austral 01"
    //     }
    // ];

    return (
        <>
            {avions.map((avion: any) => {
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
