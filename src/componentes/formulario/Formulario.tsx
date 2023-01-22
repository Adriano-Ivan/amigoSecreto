
import {useState,useRef} from "react";
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticpante";
import {useMensagemDeErro} from "../../state/hooks/useMensagemDeErro";
import styles from "./Formulario.module.css";

const Formulario = () => {

    const [nome, setNome] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const adicionarNaLista = useAdicionarParticipante();

    const mensagemDeErro = useMensagemDeErro();

    const adicionarParticipante = (evento:React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        adicionarNaLista(nome);
        setNome('');
        inputRef.current?.focus();
    }

    return (
        <form className={`${styles['formulario-selecionar-participantes']}`} 
        onSubmit={adicionarParticipante}>
                <input 
                    className={`${styles['input-formulario-selecionar-participantes']}`}
                    ref={inputRef}
                    value={nome}
                    onChange={(evento) => setNome(evento.target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                />
                <button className={`${styles['botao-formulario-selecionar-participantes']}`}  disabled={!nome}>Adicionar</button>
                {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
            </form>
        )
}

export default Formulario;