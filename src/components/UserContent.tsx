import { Content, Title, Icons, SubTitle } from "../styles/GlobalStyles";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

interface UserContentProps {
  title: string;
  username: string;
  minutes: number;
  id: number;
  content: string;
}
const UserContent = ({
  content,
  minutes,
  id,
  title,
  username,
}: UserContentProps) => {
  return (
    <Content>
      <Title>
        {title}
        <Icons>
          <AiOutlineDelete className="icon" />
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
