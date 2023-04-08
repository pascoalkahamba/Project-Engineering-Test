import { useState } from "react";
import {
  Form,
  Header,
  Input,
  Section,
  Textarea,
  Button,
} from "../styles/GlobalStyles";
import { FormProps } from "../App";
import UserContent from "./UserContent";
import Modal from "./Modal";

interface homeProps {
  form: FormProps;
  setForm: React.Dispatch<React.SetStateAction<FormProps>>;
}

export interface userInformationProps {
  username: string;
  minutes: number;
  title: string;
  content: string;
  id: number;
}

export type handleChangeProps =
  | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  | undefined;

type funAddInformationProps =
  | React.FormEventHandler<HTMLFormElement>
  | undefined;

export interface AdminProps {
  id: number;
  option: "delete" | "edit";
}

const Home = ({ form, setForm }: homeProps) => {
  const [userInformation, setUserInformation] = useState<
    userInformationProps[]
  >([]);
  const [modal, setModal] = useState(false);
  const [admin, setAdmin] = useState<AdminProps>({ id: 0, option: "delete" });
  const [editForm, setEditForm] = useState({ title: "", content: "" });

  const handleChange: handleChangeProps = ({ target }) => {
    setForm({ ...form, [target.id]: target.value });
  };

  const funAddInformation: funAddInformationProps = (event) => {
    event.preventDefault();
    setUserInformation([
      ...userInformation,
      {
        title: form.titleField,
        content: form.contentField,
        username: form.firstField,
        id: Number(Math.round(Math.random() * 100)),
        minutes: new Date().getMinutes(),
      },
    ]);

    setForm({ firstField: form.firstField, contentField: "", titleField: "" });
  };

  console.log(userInformation);

  return (
    <Section className="animeLeft">
      <Header>CodeLeap Network</Header>
      <div className="form">
        <Form onSubmit={funAddInformation}>
          <h3>What’s on your mind?</h3>
          <div className="username">
            <p>Title</p>
            <Input
              type="text"
              value={form.titleField}
              onChange={handleChange}
              id="titleField"
              placeholder="Hello World"
            />
          </div>

          <div className="username">
            <p>Content</p>
            <Textarea
              value={form.contentField}
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
              (form.titleField === "" || form.contentField === "") && true
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
          setEditForm={setEditForm}
          userInformation={userInformation}
          editForm={editForm}
          setUserInformation={setUserInformation}
          admin={admin}
        />
      )}
    </Section>
  );
};

export default Home;
