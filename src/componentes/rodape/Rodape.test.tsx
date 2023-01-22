import React from "react";
import { fireEvent, render ,screen} from "@testing-library/react";
import Rodape from "./Rodape";
import {RecoilRoot} from "recoil";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { isJsxText } from "typescript";

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return{
       useListaDeParticipantes: jest.fn()
    }
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();


jest.mock("react-router-dom", () => {
    return {
        useNavigate: () => mockNavegacao
    }
});

jest.mock("../../state/hooks/useSorteador", () => {
    return {
        useSorteador : () => mockSorteio
    }
})

describe("onde não existem participantes suficientes", () => {
    
    beforeEach(() =>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
    });

    test("a brincadeira não pode ser iniciada", () =>{
        render (
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole("button");

        expect(botao).toBeDisabled();
    });
});

describe("quando existem participantes suficientes", () => {
    const participantes = ["Hollinger", "Dbruska","Mex"];

    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue([...participantes]);
    });

    test("a brincadeira pode ser iniciada", () =>{
        render (
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole("button");

        expect(botao).not.toBeDisabled();
    });

    test("a brincadeira foi iniciada", () => {
        render (
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole("button");
        fireEvent.click(botao);

        expect(mockNavegacao).toHaveBeenCalledTimes(1);
        expect(mockNavegacao).toHaveBeenLastCalledWith("/sorteio");
        expect(mockSorteio).toHaveBeenCalledTimes(1);
    });
});