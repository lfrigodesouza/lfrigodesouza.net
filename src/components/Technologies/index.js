import React, { useState } from 'react';
import styled from 'styled-components';
import { Text } from 'dracula-ui';
import { TechnologiesData as technologiesList } from './TechnologiesData';
import Section from '../Section';
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
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100px;
    & svg {
      font-size: 60px;
    }
  }
`;

const TechText = styled(Text)`
  visibility: hidden;
  transition: all ease-in-out 0.2s;
  ${TechItem}:hover & {
    transform: translateY(5px);
    visibility: visible;
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
    <Section title="Conhecimentos">
      <TechList>
        {technologiesList.map((tech) => (
          <TechItem
            key={tech.name}
            onClick={() => technologyClickHandler(tech.name, tech.description)}
          >
            {tech.icon}
            <TechText as="span">{tech.name}</TechText>
          </TechItem>
        ))}
      </TechList>
      <ModalMessage
        showModal={showModal}
        modalCloseHandler={modalCloseHandler}
        header={technology}
        description={description}
      />
    </Section>
  );
}
