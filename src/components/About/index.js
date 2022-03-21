import { Heading, Paragraph } from '@dracula/dracula-ui';
import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import SocialMedias from '../SocialMedias';

const Title = styled(Heading)`
  margin: 40px;
  text-align: center;
`;

export default function About() {
  return (
    <Section showDivider={false}>
      <Title size="2xl" color="green">
        Olá, boas vindas!
      </Title>
      <Paragraph align="justify" lineHeight="lg">
        Me chamo Lucas, sou formado em Engenharia da Computação, tenho MBA em Engenharia de Software
        e estou cursando um MBA em CyberSecurity.
        <br />
        Com mais de 10 anos de experiência em TI, já trabalhei como analista de suporte, analista de
        teste/QA, desenvolvedor, e atualmente atuo como Líder Técnico.
        <br />
        <br />
        Meu forte é programação backend com .NET e C#, porém já trabalhei com diversas tecnologias,
        incluindo tecnologias de frontend, como Angular e React, então me considero como fullstack.
        Também tenho experiência com SQLServer, Oracle, Jenkins, Azure, AWS e outras tecnologias.
        <br />
        Também tenho um foco em segurança da informação e desenvolvimento seguro (DevSec).
        <br />
        Trabalhei por alguns anos na área da Indústria 4.0, e hoje trabalho no mercado financeiro,
        na área de investimentos de uma grande fintech brasileira.
        <br />
      </Paragraph>
      <SocialMedias />
    </Section>
  );
}
