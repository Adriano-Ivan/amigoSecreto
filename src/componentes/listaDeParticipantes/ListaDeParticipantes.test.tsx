
import { render } from "@testing-library/react";
import React from "react";
import {RecoilRoot} from "recoil";
import { screen } from "@testing-library/react";
import ListaDeParticipantes from "./ListaDeParticipantes";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { MockedComponentClass } from "react-dom/test-utils";

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return{
       useListaDeParticipantes: jest.fn()
    }
});

describe("comportamento da lista de participantes", ( )=>{


    describe("uma lista vazia de participantes", () =>{

        beforeEach(() =>{
            (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
        });

        test("renderização sem elementos", () => {
            render(
                <RecoilRoot>
                    <ListaDeParticipantes />
                </RecoilRoot>
            );
        
            const itens = screen.queryAllByRole("listitem");
    
            expect(itens).toHaveLength(0);
        });

    });

    describe("uma lista preenchida de participantes", () =>{
        const participantes = ["Hollinger", "Dbruska"];

        beforeEach(()=>{
            (useListaDeParticipantes as jest.Mock).mockReturnValue([...participantes]);
        });

        test("renderização com elementos", () => {
            render(
                <RecoilRoot>
                    <ListaDeParticipantes />
                </RecoilRoot>
            );
        
            const itens = screen.queryAllByRole("listitem");
    
            expect(itens).toHaveLength(participantes.length);
        });

    });
});