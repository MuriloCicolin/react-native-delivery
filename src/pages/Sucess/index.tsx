import React from 'react';
import { Text } from 'react-native';
import logoImg from '../../assets/up.png';

import { Container, LogoSucess, TextTitle } from './styles';

const Sucess: React.FC = () => {
  return (
    <Container>
      <LogoSucess source={logoImg} />
      <TextTitle>Pedido realizado com sucesso !</TextTitle>
    </Container>
  );
};

export default Sucess;
