import Card from "../../componentes/card/Card"
import Formulario from "../../componentes/formulario/Formulario";
import ListaDeParticipantes from "../../componentes/listaDeParticipantes/ListaDeParticipantes";
import Rodape from "../../componentes/rodape/Rodape";
import styles from "./SelecaoDeParticipantes.module.css";

const SelecaoDeParticipantes = () =>{
    return (
        <Card>
            <h2 className={`${styles['titulo-selecao-de-participantes']}`}>Vamos começar !</h2>
            <Formulario />

            <ListaDeParticipantes />

            <Rodape />
    
        </Card>
    )
}

export default SelecaoDeParticipantes;