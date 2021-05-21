import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';
import { bool, func, string } from 'prop-types';
import { Heading, Text } from '@dracula/dracula-ui';

const ModalCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @-moz-document url-prefix() {
    & {
      background-color: rgba(33, 34, 44, 90%);
    }
  }
`;
const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px ${({ theme }) => theme.color.darkerText};
  padding: ${({ theme }) => theme.padding.medium};
  color: ${({ theme }) => theme.color.accentText};
  font-size: ${({ theme }) => theme.font.large};
  font-weight: bold;
`;

const ModalArea = styled.aside`
  background: ${({ theme }) => theme.color.background};
  border: solid 2px ${({ theme }) => theme.color.darkerText};
  border-radius: 5px;
  max-width: ${({ theme }) => theme.maxModalWidth};
  margin: ${({ theme }) => theme.margin.larger};
`;

const ModalContent = styled(Text)`
  padding: ${({ theme }) => theme.padding.medium};
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled(CloseIcon)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.larger};
  color: ${({ theme }) => theme.color.faddedText};
  &:hover {
    cursor: pointer;
  }
`;

export default function ModalMessage({
  showModal, header, description, modalCloseHandler,
}) {
  return (
    <>
      {showModal && (
        <ModalCover>
          <ModalArea>
            <ModalHeader>
              <Heading color="pinkPurple" size="lg">
                {header}
              </Heading>
              <CloseButton onClick={modalCloseHandler} />
            </ModalHeader>
            <ModalContent lineHeight="lg">{parse(description)}</ModalContent>
          </ModalArea>
        </ModalCover>
      )}
    </>
  );
}

ModalMessage.propTypes = {
  showModal: bool.isRequired,
  header: string.isRequired,
  description: string.isRequired,
  modalCloseHandler: func.isRequired,
};
