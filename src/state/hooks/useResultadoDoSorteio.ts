import { resultadoAmigoSecreto } from './../atom';
import { useRecoilValue } from 'recoil';


export const useResultadoDoSorteio = () => {
    return useRecoilValue(resultadoAmigoSecreto);
}