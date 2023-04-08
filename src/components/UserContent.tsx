import { Content, Title, Icons, SubTitle } from "../styles/GlobalStyles";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { userInformationProps } from "./Home";
import Modal from "./Modal";

interface UserContentProps {
  title: string;
  username: string;
  minutes: number;
  id: number;
  content: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUserInformation: React.Dispatch<
    React.SetStateAction<userInformationProps[]>
  >;
}

const UserContent = ({
  content,
  minutes,
  id,
  title,
  username,
  setUserInformation,
  setModal,
}: UserContentProps) => {
  const funDeleteInformation = (idNumber: number) => {
    // setUserInformation((userInformation) =>
    //   userInformation.filter((user) => user.id !== idNumber)
    // );
    setModal(true);
    window.document.body.classList.add("opacity");
  };

  return (
    <Content>
      <Title>
        {title}
        <Icons>
          <AiOutlineDelete
            className="icon"
            onClick={() => funDeleteInformation(id)}
          />
          <AiOutlineEdit className="icon" />
        </Icons>
      </Title>

      <div className="form">
        <SubTitle>
          <p className="name">@{username}</p>
          <p className="minutes"> {minutes} minutes ago</p>
        </SubTitle>
        <p>{content}</p>
      </div>
    </Content>
  );
};

export default UserContent;