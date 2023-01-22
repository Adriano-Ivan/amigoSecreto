import { listaDeParticipantesState, erroState } from './../atom';
import {useSetRecoilState,useRecoilValue} from "recoil";

export const useAdicionarParticipante = () =>{
    const setLista = useSetRecoilState(listaDeParticipantesState);
    const lista = useRecoilValue(listaDeParticipantesState);
    const setErro = useSetRecoilState(erroState);

    return (nomeDoParticipante: string) =>{
        if(lista.includes(nomeDoParticipante)){
            setErro("Nomes duplicados não são permitidos");
            setTimeout(()=>{
                setErro("");
            },5000);
            return;
        }
        setErro("");
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}