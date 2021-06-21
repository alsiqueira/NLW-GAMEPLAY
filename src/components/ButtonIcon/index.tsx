import React from 'react';
import { View } from 'react-native';

import { Container, IconWrapper, Image, Title, } from './styles';

import DiscordImg from '../../assets/discord.png'

const ButtonIcon: React.FC = () => {
  return (
    <Container>
      <IconWrapper>
        <Image source={DiscordImg} />
      </IconWrapper>
      <Title>
        Entrar com Discord
      </Title>
    </Container>
  )
}

export default ButtonIcon;