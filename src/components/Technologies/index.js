import React from 'react';
import styled from 'styled-components';
import {
  DiAngularSimple,
  DiCss3,
  DiDotnet,
  DiDocker,
  DiGit,
  DiHtml5,
  DiJsBadge,
  DiRedis,
  DiMsqlServer,
  DiReact,
  DiScrum,
} from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { SiMicrosoftazure } from 'react-icons/si';
import { BsShieldLock } from 'react-icons/bs';

import Divider from '../Divider';

class Technology {
  constructor(icon, description) {
    this.icon = icon;
    this.description = description;
  }
}

const technologiesList = [
  new Technology(<DiDotnet />, '.NET'),
  new Technology(<DiReact />, 'React'),
  new Technology(<DiGit />, 'Git'),
  new Technology(<DiDocker />, 'Docker'),
  new Technology(<SiMicrosoftazure />, 'Azure'),
  new Technology(<DiScrum />, 'Scrum'),
  new Technology(<DiCss3 />, 'CSS3'),
  new Technology(<DiHtml5 />, 'HTML5'),
  new Technology(<DiJsBadge />, 'JavaScript'),
  new Technology(<BsShieldLock />, 'DevSec'),
  new Technology(<DiRedis />, 'Redis'),
  new Technology(<DiMsqlServer />, 'MSSQLServer'),
  new Technology(<DiAngularSimple />, 'Angular'),
  new Technology(<FaAws />, 'AWS'),
];

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const TechList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
  padding: 0px;
`;

const TechItem = styled.li`
  /* padding: ${({ theme }) => theme.padding.medium} ${({ theme }) => theme.padding.large}; */
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

const Title = styled.h1`
  margin-bottom: 0px;
  color: ${({ theme }) => theme.color.accentText};
`;

export default function Technologies() {
  return (
    <Section>
      <Divider />
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
