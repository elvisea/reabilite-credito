import React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next'
import ReabiliteHeaderLogo from '../../../public/images/header-logo.svg'

import { Container } from './styles';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Header: NextPage = () => {
  return (
    <Container>
      <Image
        src={ReabiliteHeaderLogo}
        width={122}
        height={22}
        alt='Reabilite Logo'
      />

      <nav>
        <a href="">Home</a>
        <a href="">Sobre Nós</a>
        <a href="">Dúvidas</a>
      </nav>

      <div id='redes-sociais'>
        <a href="https://www.facebook.com/">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter />
        </a>
      </div>

      <button>Reabilite</button>
    </Container>
  );
};

export { Header };
