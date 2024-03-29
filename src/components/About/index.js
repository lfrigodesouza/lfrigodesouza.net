import { Heading, Paragraph } from 'dracula-ui';
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
        Me chamo Lucas, sou formado em Engenharia da Computação com MBAs em Engenharia de Software e
        Cibersegurança.
        <br />
        <br />
        Com mais de 14 anos de experiência em TI, já trabalhei como analista de suporte,
        analista de teste/QA, desenvolvedor e atualmente atuo como líder técnico na
        {' '}
        <a href="https://www.iteris.com.br/" target="_blank" rel="noreferrer">Iteris Consultoria</a>
        .
        <br />
        <br />
        Meu forte é programação backend com .NET e C#, porém já trabalhei com diversas
        outras tecnologias, como Angular, React e Python. Também tenho experiência com
        SQLServer, Oracle, MongoDB, Redis, Jenkins, Azure, AWS, Docker, Kubernetes, entre outras.
        <br />
        Também tenho um foco em segurança da informação e desenvolvimento seguro (DevSec).
        <br />
        <br />
        Trabalhei por alguns anos na área da Indústria 4.0, já atuei no mercado de investimentos e
        no setor imobiliário e atualmente estou atuando no mercado de adquirência
        para uma empresa dos EUA.
        <br />
      </Paragraph>
      <SocialMedias />
    </Section>
  );
}
