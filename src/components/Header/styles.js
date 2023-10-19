import styled from 'styled-components';

export const Container = styled.header`
  background: ${({theme}) => theme.choosedTheme.postBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 ${({theme})=> theme.themeProps.spacing['large']}px;
  border-radius: 10px;
  justify-content: space-between;

  button {
    font-size: ${({theme})=> theme.themeProps.spacing['medium']}px;
    cursor: pointer;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
