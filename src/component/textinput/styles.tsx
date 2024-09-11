import styled from 'styled-components/native';
import {colors} from '@/utils/themes';
export const TextInputStyled = styled.TextInput`
  height: 30px;
  flex: 1;
  margin-bottom: 5px;
`;

export const LineTextStyled = styled.View`
  border-width: 0.5px;
  align-self: stretch;
  border-color: ${colors.gray};
  flex-direction: row;
  margin-bottom: 15px;
`;

export const MainContainerStyled=styled.View`
  flex-direction: column;
`

export const TextInputContainerStyled = styled.View`
  flex-direction: row;
`;
