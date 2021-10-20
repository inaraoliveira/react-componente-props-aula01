import React from 'react';

export const Carta = (props) => {
    return (
        <div>
            <h1>Olá {props.remetente} - {props.destino}</h1>
            <p>Estou escrevendo esta carta por causa da atividade que os alunos vão fazer, okay. Não desiste,
                continue fazendo as atividades, treinando e praticando. O céu é o limite!</p>
        </div>
    );
}