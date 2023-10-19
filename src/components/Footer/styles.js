import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({theme}) => theme.choosedTheme.postBackgroundColor};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 ${({theme})=> theme.themeProps.spacing['large']}px;
  border-radius: 10px;
  justify-content: space-between;
  margin-top: ${({theme})=> theme.themeProps.spacing['large']}px;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
