import { Content, Title, Icons, SubTitle } from "../styles/GlobalStyles";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { AdminProps } from "./Home";

interface UserContentProps {
  title: string;
  id: number;
  username: string;
  minutes: number;
  content: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setAdmin: React.Dispatch<React.SetStateAction<AdminProps>>;
}

const UserContent = ({
  content,
  minutes,
  title,
  id,
  username,
  setModal,
  setAdmin,
}: UserContentProps) => {
  const funDeleteInformation = () => {
    setAdmin({ id: id, option: "delete" });
    setModal(true);
    window.document.body.classList.add("opacity");
  };

  const funEditInformation = () => {
    setAdmin({ id: id, option: "edit" });
    setModal(true);
    window.document.body.classList.add("opacity");
  };

  return (
    <Content>
      <Title>
        {title}
        {username === "Pascoal Kahamba" && (
          <Icons>
            <AiOutlineDelete className="icon" onClick={funDeleteInformation} />
            <AiOutlineEdit className="icon" onClick={funEditInformation} />
          </Icons>
        )}
      </Title>

      <div className="form">
        <SubTitle>
          <p className="name">@{username}</p>
          <p className="minutes">{minutes} minutes ago</p>
        </SubTitle>
        <p>{content}</p>
      </div>
    </Content>
  );
};

export default UserContent;
