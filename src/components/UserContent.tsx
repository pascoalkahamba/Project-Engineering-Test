import { Content, Title, Icons, SubTitle } from "../styles/GlobalStyles";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { AdminProps, UserInformationProps } from "./Home";

interface UserContentProps extends UserInformationProps {
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
  function deleteInformation() {
    setAdmin({ id: id, option: "delete" });
    setModal(true);
    window.document.body.classList.add("opacity");
  }

  function editInformation() {
    setAdmin({ id: id, option: "edit" });
    setModal(true);
    window.document.body.classList.add("opacity");
  }

  return (
    <Content>
      <Title>
        {title}
        <Icons>
          <AiOutlineDelete className="icon" onClick={deleteInformation} />
          <AiOutlineEdit className="icon" onClick={editInformation} />
        </Icons>
      </Title>

      <div className="form">
        <SubTitle>
          <p className="name">@{username}</p>
          <p className="minutes">{minutes} minutes ago</p>
        </SubTitle>
        <div>{content}</div>
      </div>
    </Content>
  );
};

export default UserContent;
