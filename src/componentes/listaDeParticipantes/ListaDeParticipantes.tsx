import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import styles from "./ListaDeParticipantes.module.css";

const ListaDeParticipantes = () => {
    const participantes = useListaDeParticipantes();

    return (
        <ul className={`${styles['lista-de-participantes']}`}>
            {
                participantes.map((participante) =>{
                    return <li key={participante}>{participante}</li>
                })
            }
        </ul>
       
    );
}

export default ListaDeParticipantes;