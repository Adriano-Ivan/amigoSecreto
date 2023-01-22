import { render } from "@testing-library/react";
import {RecoilRoot} from "recoil";
import  React from "react";
import ListaDeParticipantes from "../../componentes/listaDeParticipantes/ListaDeParticipantes";

const mockNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
    return {
        useNavigate: () => mockNavegacao
    }
});

describe("página de configuração", () => {

    test("deve ser renderizada corretamente", () => {
        const {container }  = render(
            <RecoilRoot >
                <ListaDeParticipantes/>
            </RecoilRoot>
        );

        expect(container).toMatchSnapshot();
    });
});