import { Content, Title, Icons, SubTitle } from "../styles/GlobalStyles";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import Modal from "./Modal";

interface UserContentProps {
  title: string;
  id: number;
  username: string;
  minutes: number;
  content: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
}

const UserContent = ({
  content,
  minutes,
  title,
  id,
  username,
  setModal,
  setId,
}: UserContentProps) => {
  const funDeleteInformation = () => {
    setId(id);
    setModal(true);
    window.document.body.classList.add("opacity");
  };

  return (
    <Content>
      <Title>
        {title}
        <Icons>
          <AiOutlineDelete className="icon" onClick={funDeleteInformation} />
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
