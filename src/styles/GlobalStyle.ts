import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: grid;
font-family: 'Work Sans', sans-serif;
  font-size: 1.3rem;
  color:#fff;
  background: #000
 
}
 
  
`;

export const Section = styled.section`
  width: 40rem;
  height: 26rem;
  margin: 2rem auto;
  padding: 0.5rem;
`;

export const FirstTitlle = styled.h1`
  color: rgb(95, 95, 255);
  font-weight: 700;
  font-size: 4rem;
  margin: 1rem 0;
`;

export const Button = styled.button`
  background: #535353;
  color: #fff;
  border-radius: 10px;
  padding: 0 1.6rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  line-height: 47px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Typographies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 0.1rem;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  align-items: center;
`;

export const SecondButton = styled.button`
  background: rgb(22, 231, 22);
  color: #000;
  border-radius: 10px;
  padding: 0 1.6rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  line-height: 47px;
`;
