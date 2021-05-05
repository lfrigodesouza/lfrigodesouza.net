import React from 'react';
import styled from 'styled-components';
import {
  DiDotnet, DiScrum, DiVim, DiMongodb, DiRedis,
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

import Section from '../Section';
import Title from '../Title';

class Technology {
  constructor(icon, description) {
    this.icon = icon;
    this.description = description;
  }
}

const technologiesList = [
  new Technology(<DiDotnet />, '.NET'),
  new Technology(<BsShieldLock />, 'DevSec'),
  new Technology(<SiGit />, 'Git'),
  new Technology(<SiReact />, 'React'),
  new Technology(<SiDocker />, 'Docker'),
  new Technology(<SiKubernetes />, 'Kubernetes'),
  new Technology(<SiMicrosoftazure />, 'Azure'),
  new Technology(<SiAmazonaws />, 'AWS'),
  new Technology(<DiScrum />, 'Agilidade'),
  new Technology(<SiMicrosoftsqlserver />, 'MSSQLServer'),
  new Technology(<SiOracle />, 'Oracle'),
  new Technology(<DiMongodb />, 'MongoDB'),
  new Technology(<DiRedis />, 'Redis'),
  new Technology(<SiFirebase />, 'Firebase'),
  new Technology(<DiVim />, 'Vim'),
];

const TechList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
`;

const TechItem = styled.li`
  padding-top: ${({ theme }) => theme.padding.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  color: ${({ theme }) => theme.color.darkerText};
  & svg {
    font-size: 90px;
  }
  &:hover {
    color: ${({ theme }) => theme.color.text};
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100px;
    & svg {
      font-size: 60px;
    }
  }
`;

export default function Technologies() {
  return (
    <Section>
      <Title>Conhecimentos</Title>
      <TechList>
        {technologiesList.map((tech) => (
          <TechItem key={tech.description}>
            {tech.icon}
            <span>{tech.description}</span>
          </TechItem>
        ))}
      </TechList>
    </Section>
  );
}
