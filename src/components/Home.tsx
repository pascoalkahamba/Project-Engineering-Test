import { useReducer, useState } from "react";
import {
  Form,
  Header,
  Input,
  Section,
  Textarea,
  Button,
} from "../styles/GlobalStyles";
import { FormProps, validateField } from "../App";
import UserContent from "./UserContent";
import Modal from "./Modal";
import manageInfoReducer from "../ManageInfoReducer";

interface homeProps {
  form: FormProps;
  setForm: React.Dispatch<React.SetStateAction<FormProps>>;
}

export interface UserInformationProps {
  username?: string;
  minutes?: number;
  title?: string;
  content?: string;
  id?: number;
}

export type handleChangeProps =
  | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  | undefined;

type funAddInformationProps =
  | React.FormEventHandler<HTMLFormElement>
  | undefined;

export interface AdminProps {
  id?: number;
  option: "delete" | "edit";
}

const Home = ({ form, setForm }: homeProps) => {
  const [userInformation, dispatch] = useReducer(manageInfoReducer, []);
  const [modal, setModal] = useState(false);
  const [admin, setAdmin] = useState<AdminProps>({ id: 0, option: "delete" });
  const { contentField, firstField, titleField } = form;

  const handleChange: handleChangeProps = ({ target }) => {
    setForm({ ...form, [target.id]: target.value });
  };

  const validateTitleField = validateField(titleField);
  const validateContentField = validateField(contentField);

  const addInformation: funAddInformationProps = (event) => {
    event.preventDefault();
    dispatch({
      type: "add",
      title: titleField,
      content: contentField,
      username: firstField,
    });

    setForm({ firstField: firstField, contentField: "", titleField: "" });
  };

  return (
    <Section className="animeLeft">
      <Header>CodeLeap Network</Header>
      <div className="form">
        <Form onSubmit={addInformation}>
          <h3>What’s on your mind?</h3>
          <div className="username">
            <p>Title</p>
            <Input
              type="text"
              value={titleField}
              onChange={handleChange}
              id="titleField"
              placeholder="Hello World"
            />
          </div>

          <div className="username">
            <p>Content</p>
            <Textarea
              value={contentField}
              onChange={handleChange}
              id="contentField"
              placeholder="Content Here"
            />
          </div>
          <Button
            backgroundColor="#7695ec"
            color="#fff"
            border="none"
            type="submit"
            disabled={
              (validateTitleField && true) || (validateContentField && true)
            }
          >
            Create
          </Button>
        </Form>

        {userInformation.map(({ content, id, title, minutes, username }) => (
          <UserContent
            key={id}
            id={id}
            setModal={setModal}
            username={username}
            title={title}
            minutes={minutes}
            content={content}
            setAdmin={setAdmin}
          />
        ))}
      </div>
      {modal && (
        <Modal
          setModal={setModal}
          userInformation={userInformation}
          dispatch={dispatch}
          admin={admin}
        />
      )}
    </Section>
  );
};

export default Home;
