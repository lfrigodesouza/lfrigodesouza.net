import React from 'react';
import {
  DiDotnet, DiScrum, DiVim, DiRedis,
} from 'react-icons/di';
import {
  SiOracle,
  SiKubernetes,
  SiMicrosoftazure,
  SiFirebase,
  SiGit,
  SiReact,
  SiDocker,
  SiAmazonaws,
  SiMicrosoftsqlserver,
} from 'react-icons/si';
import { BsShieldLock } from 'react-icons/bs';

export class Technology {
  constructor(icon, name, description) {
    this.icon = icon;
    this.name = name;
    this.description = description;
  }
}

export const TechnologiesData = [
  new Technology(
    <DiDotnet />,
    '.NET',
    `Tenho alguns anos de experiência com desenvolvimento backend com .NET e C#, principalmente com desenvolvimento de aplicações web.
    <br>Atualmente trabalho como Líder Técnico de um time cuja tecnologia principal é .NET, 
    com a construção e manutenção de WebApis com .NET Core, com projetos com MediatR, RabbitMQ e CQRS.`,
  ),
  new Technology(
    <BsShieldLock />,
    'DevSec',
    `Sou entusiasta da área de segurança da informação, e hoje procuro me especializar na área do Desenvolvimento Seguro.
    <br>Atualmente estou cursando um MBA em CyberSecurity na FIAP, uma das mais reconhecidas faculdades de tecnologia de São Paulo.`,
  ),
  new Technology(
    <SiGit />,
    'Git',
    `Trabalho diariamente com Git, mantendo os mais diversos repositórios e trabalhando em colaboração com outras pessoas e com outros times.
    <br>Vivência com GitFlow e a cultura de PRs e Code Review.`,
  ),
  new Technology(
    <SiReact />,
    'React',
    `Também tenho conhecimentos em ReactJS, mesmo hoje meu foco sendo no desenvolvimento backend. 
    <br>Este site mesmo foi todo construindo utilizando React, com hooks e styled-components.`,
  ),
  new Technology(
    <SiDocker />,
    'Docker',
    'Experiência com o deploy de aplicações no docker e outros gerenciadores de containers, e também com a criação e manutenção de arquivos Dockerfile.',
  ),
  new Technology(
    <SiKubernetes />,
    'Kubernetes',
    'Contato diário com aplicações rodando no Kubernetes, especificamente no EKS com o Helm. Tenho experiência também na configuração das aplicações para ambiente Kubernetes, assim como a manutenção e diagnósticos dos pods.',
  ),
  new Technology(
    <SiMicrosoftazure />,
    'Azure',
    `Sou certificado no exame AZ-900 (Microsoft Azure Fundamentals), e mesmo não trabalhando diariamente com o Azure, tenho os conhecimentos para o deploy de WebApps, criação 
    e manutenção de recursos, criação de bancos de dados, uso do AzureDevOps, etc.`,
  ),
  new Technology(
    <SiAmazonaws />,
    'AWS',
    'Trabalho diariamente com recursos da AWS, como o AKS, Buckets S3, containers no Beanstalk, etc. Tenho conhecimento básico no gerenciamento e diagnósticos desses recursos.',
  ),
  new Technology(
    <DiScrum />,
    'Agilidade',
    'Tenho um MBA em Engenharia de Software e trabalho diariamente com projetos ágeis, tanto com Scrum quanto com Kanban, facilitando cerimônias e monitorando métricas do time.',
  ),
  new Technology(
    <SiMicrosoftsqlserver />,
    'MSSQLServer',
    'Tenho 9 anos de experiência trabalhando com MSSQLServer, tanto com execução e construção de queries, quanto otimização de rotinas, importação e exportação de bancos, instalação de servidores, manutenções, etc.',
  ),
  new Technology(
    <SiOracle />,
    'Oracle',
    `Hoje trabalho principalmente com bancos de dados Oracle. 
    <br>Tenho conhecimento na instalação de instâncias, gerenciamento de schemas, execução e otimização de queries, etc.`,
  ),
  new Technology(
    <DiRedis />,
    'Redis',
    'Tenho experiência com uso de Redis para funcionalidades de cache, principalmente com backend em .NET.',
  ),
  new Technology(
    <SiFirebase />,
    'Firebase',
    'Tenho conhecimentos com a integração do Firebase com sistemas Web, tanto para uso de armazenamento, criação de functions, autenticação, Remote Config, etc.',
  ),
  new Technology(
    <DiVim />,
    'Vim',
    'Não basta só usar o Vim, tem de falar pra todo mundo que usa! Se você nunca experimentou, vale a pena dar uma olhada. Apesar de ter uma curva de aprendizado e parecer assustador no começo, vale muito a pena pelo ganho de produtividade. <p class="drac-text-green">❤ Vi</p>',
  ),
];
