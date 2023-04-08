import styled, { createGlobalStyle, css } from "styled-components";
interface CssProps {
  backgroundColor: React.CSSProperties["backgroundColor"];
  color: React.CSSProperties["color"];
  border: React.CSSProperties["border"];
}

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 
.opacity{
   background-color: #777777cc;
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

  .form {
    width: 100%;
    padding: 1rem;
  }

    .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    align-self: end;
  }

  .animeLeft {
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;
}
@keyframes animeLeft {
  to {
    opacity: 1;
    transform: initial;
  }
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

export const Button = styled.button<CssProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  cursor: pointer;
  width: 7rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: ${({ border }) => border};
  align-self: end;

  ${({ backgroundColor }) =>
    backgroundColor === "#47B960" &&
    css`
      &:disabled {
        background-color: #ddd;
        border: 2px solid #ddd;
        pointer-events: none;
      }
    `}

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
  resize: none;
  outline: none;
  border: 2px solid #dddd;
  border-radius: 1rem;
`;

export const Title = styled.header`
  width: 100%;
  background-color: #7695ec;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  color: #fff;
  padding: 1rem;
`;

export const SubTitle = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;

  .name {
    color: #777777;
    font-weight: bolder;
  }

  .minute {
    color: #777777;
    font-size: 0.5rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border: 2px solid #dddd;
  border-radius: 1rem;
  gap: 1rem;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .icon {
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

export const ModalDelete = styled(UserNameField)`
  background-color: #fff;
  position: fixed !important;
  padding: 1.2rem;
  p {
    font-weight: bold;
  }
  transform: translateY(-20px);
  animation: animeRight 0.3s forwards;

  @keyframes animeRight {
    to {
      opacity: initial;
      transform: initial;
    }
  }
`;

export const ModalEdit = styled(Form)`
  background-color: #fff;
  .title {
    font-weight: bold;
  }
  z-index: 9999999;
  position: fixed !important;
  transform: translateY(-20px);
  animation: animeRight 0.3s forwards;

  @keyframes animeRight {
    to {
      opacity: initial;
      transform: initial;
    }
  }
`;

export const ModalSection = styled.section`
  position: fixed !important;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: #777777cc;
`;
