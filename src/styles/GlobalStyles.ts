import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Work Sans', sans-serif;
  font-size: 1.1rem;
  color:#000;
  background: #DDDD
 
} 

.App{
   display: flex;
  justify-content:center;
  align-items:center;
}

  .username {
    line-height: 2;
  }
`;

export const UserNameField = styled.div`
  background-color: #ffff;
  width: 30rem;
  margin-top: 8rem;
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

  &:disabled {
    background-color: #ddd;
    pointer-events: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: 2px solid #dddd;
  outline: none;
  border-radius: 0.5rem;
  background-color: #fff;
`;

export const Section = styled.section`
  width: 46rem;
  margin-top: 3rem;
  background-color: #fff;

  .form {
    width: 100%;
    padding: 1rem;
  }
`;

export const Header = styled.header`
  width: 100%;
  background-color: #7695ec;
  font-weight: bolder;
  color: #fff;
  padding: 1rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 2px solid #dddd;
  border-radius: 1rem;
  gap: 1rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  outline: none;
  border: 2px solid #dddd;
  border-radius: 1rem;
`;
