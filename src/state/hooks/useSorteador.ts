import { resultadoAmigoSecreto } from './../atom';
import { useSetRecoilState } from 'recoil';
import shuffle from 'just-shuffle';
import { useListaDeParticipantes } from './useListaDeParticipantes';
import { realizarSorteio } from '../helpers/realizarSorteio';


export const useSorteador = () => {
    const participantes = useListaDeParticipantes();

    const setResultado = useSetRecoilState(resultadoAmigoSecreto);

    return () =>{
        const resultado = realizarSorteio(participantes);

        setResultado(resultado);
    }
}