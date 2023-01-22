import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import {useNavigate} from "react-router-dom";
import styles from "./Rodape.module.css";
import { useSorteador } from "../../state/hooks/useSorteador";

const Rodape = () => {
    const participantes = useListaDeParticipantes();

    const navegarPara = useNavigate();

    const sortear = useSorteador();

    const iniciar= () =>{
        sortear();
        navegarPara("/sorteio")
    }

    return (
        <footer className={`${styles['rodape']}`}>
            <button
                onClick ={iniciar}
                className={`${styles['botao-de-ir-para-sorteio']}`}
                 disabled={participantes.length <3 }>Iniciar brincadeira</button>

                 <img src="/imagens/sacolas.png" alt="ícone de sacolas"/>.
        </footer>
    );
}

export default Rodape;
