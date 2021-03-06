import React, { useState } from 'react';
import styled from 'styled-components';
import { Text } from '@dracula/dracula-ui';
import { bool } from 'prop-types';
import { TiBeer } from 'react-icons/ti';
import ModalMessage from '../ModalMessage';

const FooterBar = styled.footer`
  background: ${({ theme }) => theme.color.backgroundOpaque};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: solid 1px ${({ theme }) => theme.color.divider};
  bottom: 0;
  position: ${(props) => (props.fixed ? 'fixed' : 'unset')};
`;

const BeerButton = styled.span`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BUY_ME_A_BEER_DESCRIPTION = `Gostou dos meus conteúdos? Porque não aproveita e me compra uma cerveja? Utilize o QRCode abaixo (ou o código da chave) para fazer um Pix de qualquer valor! <br> Vai me ajudar tanto com cerveja, quanto com as despesas dos conteúdos que eu produzo!

<span class="drac-text-black-secondary drac-mb-sm drac-mt-sm drac-text-center">5c80c88b-d1e7-4799-a185-dd8517d1671e</span>
<img width="70%" src="/qrcode-pix.png"/>`;

export default function Footer({ fixed }) {
  const [showModal, setShowModal] = useState(false);
  function modalCloseHandler(evt) {
    evt.preventDefault();
    setShowModal(false);
  }

  function beerClickHandler() {
    setShowModal(true);
  }
  return (
    <FooterBar fixed={fixed}>
      <Text as="p" color="purpleCyan" size="sm">
        LFrigoDeSouza.NET | © 2020 – 2021
        {' '}
        <BeerButton onClick={beerClickHandler}>
          Buy me a beer
          <Text as={TiBeer} color="cyan" />
        </BeerButton>
      </Text>

      <ModalMessage
        modalCloseHandler={modalCloseHandler}
        showModal={showModal}
        header="Buy me a Beer!"
        description={BUY_ME_A_BEER_DESCRIPTION}
      />
    </FooterBar>
  );
}

Footer.defaultProps = {
  fixed: false,
};

Footer.propTypes = {
  fixed: bool,
};
