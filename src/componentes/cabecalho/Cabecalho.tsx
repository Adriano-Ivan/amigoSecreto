import styles from "./Cabecalho.module.css";
import {Outlet} from "react-router-dom";

const Cabecalho = () => {
    return ( 
        <>
        <header className={styles['sorteador-cabecalho']}>
            <div>
                <img src="/imagens/logo.png" alt="logo do site"/>
            </div>
            <img 
                src="/imagens/participante.png" 
                className={styles[`sorteador-cabecalho-participante-imagem`]} 
                alt="Participante"
            />
        </header>
        <Outlet />
        </>
    );
}

export default Cabecalho;