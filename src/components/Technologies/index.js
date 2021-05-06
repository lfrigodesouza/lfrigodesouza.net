import React, { useState } from 'react';
import styled from 'styled-components';
import { TechnologiesData as technologiesList } from './TechnologiesData';
import Section from '../Section';
import Title from '../Title';
import ModalMessage from '../ModalMessage';

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
  const [technology, setTechnology] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  function modalCloseHandler(evt) {
    evt.preventDefault();
    setShowModal(false);
  }

  function technologyClickHandler(techName, techDescription) {
    setTechnology(techName);
    setDescription(techDescription);
    setShowModal(true);
  }

  return (
    <Section>
      <Title>Conhecimentos</Title>
      <TechList>
        {technologiesList.map((tech) => (
          <TechItem
            key={tech.name}
            onClick={() => technologyClickHandler(tech.name, tech.description)}
          >
            {tech.icon}
            <span>{tech.name}</span>
          </TechItem>
        ))}
      </TechList>
      <ModalMessage
        showModal={showModal}
        modalCloseHandler={modalCloseHandler}
        technology={technology}
        description={description}
      />
    </Section>
  );
}
