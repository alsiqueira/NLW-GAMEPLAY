import React from 'react';

import { Container, Image, Title, SubTitle } from './styles';

import IlustrationImg from '../../assets/illustration.png'
import { StatusBar } from 'react-native';
import ButtonIcon from '../../components/ButtonIcon';

const SignIn: React.FC = () => {
  return (
    <Container>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Image source={IlustrationImg} />
      <Title>
        Conecte-se{'\n'}
        e organize suas{'\n'}
        jogatinas{'\n'}
      </Title>
      <SubTitle>
        Crie grupos para jogar seus games{'\n'}
        favoritos com seus amigos{'\n'}
      </SubTitle>
      <ButtonIcon />
    </Container>
  )
}

export default SignIn;