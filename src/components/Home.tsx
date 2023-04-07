import React from "react";
import {
  Form,
  Header,
  Input,
  Section,
  Textarea,
  Button,
} from "../styles/GlobalStyles";
import { FormProps } from "../App";

interface homeProps {
  form: FormProps;
  setForm: React.Dispatch<React.SetStateAction<FormProps>>;
}

type handleChangeProps =
  | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  | undefined;

type funAddInformationProps =
  | React.FormEventHandler<HTMLFormElement>
  | undefined;

const Home = ({ form, setForm }: homeProps) => {
  const handleChange: handleChangeProps = ({ target }) => {
    setForm({ ...form, [target.id]: target.value });
  };

  const funAddInformation: funAddInformationProps = (event) => {
    event.preventDefault();
  };

  return (
    <Section>
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
            type="submit"
            disabled={
              (form.titleField === "" || form.contentField === "") && true
            }
          >
            Create
          </Button>
        </Form>
      </div>
    </Section>
  );
};

export default Home;
