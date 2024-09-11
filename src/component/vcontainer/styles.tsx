import styled from 'styled-components/native';

export const Container = styled.View<{alignType: string,justify:string}>`
  flex-direction: column;
  align-items: ${({alignType}) => alignType};
  justify-content:${({justify})=>justify}
  flex:1;
`;

export const SafeAreaViewStyled = styled.SafeAreaView``;
