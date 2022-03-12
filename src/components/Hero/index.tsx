/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Image from 'next/image';
import React from 'react';

import ImageHero from '../../../public/images/image-hero.svg'
import { Container, Content } from './styles';

const Hero: NextPage = () => {
  return (
    <Container>
      <Content>
        <h1>Sabemos que o nome “limpo” é o bem mais valioso para o Brasileiro!</h1>
        <p>A Reabilite Reabilitação de Crédito é uma empresa brasileira que nasceu com o objetivo de fazer as pessoas dormirem tranquilamente.</p>
        <button>FAÇA UMA SIMULAÇÃO</button>
      </Content>

      <Image src={ImageHero} height={494} width={494} alt='Image Hero' />
      {/* <img src={ImageHero} height={494} width={494} alt='Image Hero' /> */}
    </Container>
  );
};

export default Hero;
