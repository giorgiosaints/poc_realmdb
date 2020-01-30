import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#9B49c1'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px; 
`;
// padding-top: ${30 + getStatusBarHeight(true)}px; -> Only in iOS get the statusBarHeight and sum with the 30px

export const Title = styled.Text`
  font-size: 32px;
  color: #FFF;
  font-weight: bold;
  padding: 0 20px; 
`;
// padding: 0 20px; -> Desgruda o texto das laterais

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;
/* 
  flex-direction: row; -> Deixa um item do lado do outro
  margin-top: 10px; -> Para distanciar do título
  padding: 0 20px; -> Desgruda o form das laterais 
*/

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #FFF;
  border: 2px solid ${props => props.error ? '#FF7272' : '#FFF'};
`;
/*
 flex: 1; -> Para ocupar o espaço todo ta dela e empurrar o button Submit pro canto da tela
 padding: 12px 15px; -> 12px Em cima e embaixo 15px direita esquerda
 */


export const Submit = styled.TouchableOpacity`
  background: #6bd4c1;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;

`;
/**
 * justify-content: center; -> para o icone ficar centralizado na área do btn
 */

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

