import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-size: ${({ theme }) => theme.font.large};
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function About() {
  return (
    <Section>
      <p>
        Me chamo Lucas, sou formado em Engenharia da Computação, tenho MBA em Engenharia de Software
        e estou cursando um MBA em CyberSecurity.
        <br />
        Com mais de 10 anos de experiência em TI, já trabalhei como analista de suporte e teste/QA,
        e atualmente atuo como programador sênior na Iteris Consultoria.
        <br />
        <br />
        Meu forte é programação backend com .NET e C#, porém já trabalhei com diversas tecnologias,
        como Angular, React, SQLServer, Oracle, Jenkins, Azure, AWS e outras outras.
        <br />
        Também tenho um foco em segurança da informação e desenvolvimento seguro (DevSec).
        <br />
        Trabalhei por alguns anos na área da Indústria 4.0, mas hoje trabalho na área do mercado
        financeiro e investimentos.
      </p>
    </Section>
  );
}
