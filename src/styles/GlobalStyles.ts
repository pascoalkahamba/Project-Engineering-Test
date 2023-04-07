import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Work Sans', sans-serif;
  font-size: 1.2rem;
  color:#000;
  background: #DDDD
 
} 

.App{
   display: flex;
  justify-content:center;
  align-items:center;
}
`;

export const UserNameField = styled.div`
  background-color: #ffff;
  width: 30rem;
  margin-top: 10rem;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Button = styled.button`
  background-color: #7695ec;
  color: #fff;
  cursor: pointer;
  width: 7rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  align-self: end;
`;
