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

type handleChangeProps =
  | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  | undefined;

type funAddInformationProps =
  | React.FormEventHandler<HTMLFormElement>
  | undefined;

const Home = ({ form, setForm }: homeProps) => {
  const [userInformation, setUserInformation] = useState<
    userInformationProps[]
  >([]);

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
            setUserInformation={setUserInformation}
            username={username}
            title={title}
            minutes={minutes}
            content={content}
            id={id}
          />
        ))}
      </div>
    </Section>
  );
};

export default Home;
