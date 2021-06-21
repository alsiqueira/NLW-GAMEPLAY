import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
  background: #E51c44;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: #991F36;

`;

export const Image = styled.Image `
  width: 24px;
  height: 18px;
`;

export const Title = styled.Text `
 flex: 1;
 color: #DDE3F0;
 font-size: 15px;
 text-align: center;
`;

