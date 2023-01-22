import { useEffect, useState } from "react";
import Card from "../../componentes/card/Card"
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoDoSorteio } from "../../state/hooks/useResultadoDoSorteio";
import styles from "./Sorteio.module.css";

const Sorteio = () => {
    const participantes = useListaDeParticipantes();
    const [participanteDaVez, setParticipanteDaVez] = useState("");
    const [amigoSecreto, setAmigoSecreto]= useState("");

    const resultado = useResultadoDoSorteio();

    const definirPadrao = () =>{
        if(resultado.has(participantes[0])){
            setAmigoSecreto(resultado.get(participantes[0])!);
        }
    }

    const sortear = (evento:React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        if(resultado.has(participanteDaVez)){
            setAmigoSecreto(resultado.get(participanteDaVez)!);
        } else if(participanteDaVez.trim() === ""){
            definirPadrao();
        }

        setTimeout(()=>{
            setAmigoSecreto("");
        },5000);
    }

    return (
        <Card>
               <form  className={`${styles['formulario-sortear']}`}  onSubmit={sortear}>
                <h2 className={`${styles['titulo-sortear-participantes']}`}>Quem vai tirar o papelzinho ?</h2>
                    <select 
                        className={`${styles['formulario-select-sortear']}`}
                        required 
                        name="participanteDaVez"
                        id="participanteDaVez" 
                        placeholder="Selecione o seu nome"
                        value={participanteDaVez}
                        onChange={evento => setParticipanteDaVez(evento.target.value)}
                    >
                        {
                            participantes.map(participante =>{
                                return <option key={participante}>{participante}</option>
                            })
                        }
                    </select>
                    
                    <p className={`${styles['formulario-sortear-aviso']}`}>
                        Clique em em sortear para ver quem é seu amigo secreto!
                    </p>

                    <button  className={`${styles['formulario-sortear-submit']}`} >Sortear</button>
               </form>

               {
                amigoSecreto && 
                <p  
                    className={`${styles['formulario-sortear-pessoa-sorteada']}`} 
                    role="alert">
                        {amigoSecreto}
                </p>
               }

                <img src="/imagens/aviao.png" alt="ícone de sacolas"/>.
        </Card>
    )
}

export default Sorteio;