import React from "react";
import { realizarSorteio } from "./realizarSorteio";

describe("dado um sorteio de amigo secreto", () => {
    test("cada participante não sorteie o próprio nome", () => {
        const participantes = [
            "Henrell", "Madison", "Gilfrod", "Neles",
            "Morcus", "Rensol",
        ];

        const sorteio = realizarSorteio(participantes);

        participantes.forEach(participante =>{
            const amigoSecreto = sorteio.get(participante);

            expect(amigoSecreto).not.toEqual(participante);
        });
    });
});