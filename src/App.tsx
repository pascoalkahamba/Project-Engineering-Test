import { useState } from "react";
import {
  Button,
  GlobalStyle,
  Input,
  UserNameField,
} from "./styles/GlobalStyles";
import Home from "./components/Home";

export interface FormProps {
  firstField: string;
  titleField: string;
  contentField: string;
}

type handleChangeProps = React.ChangeEventHandler<HTMLInputElement> | undefined;

const App = () => {
  const [nextPage, setNextPage] = useState(false);
  const [form, setForm] = useState<FormProps>({
    firstField: "",
    titleField: "",
    contentField: "",
  });

  const handleChange: handleChangeProps = ({ target }) => {
    setForm({ ...form, [target.id]: target.value });
  };

  return (
    <div className="App">
      <GlobalStyle />
      {nextPage ? (
        <Home form={form} setForm={setForm} />
      ) : (
        <UserNameField>
          <h3>Welcome to CodeLeap network!</h3>
          <div className="username">
            <p>Please enter your username</p>
            <Input
              type="text"
              id="firstField"
              placeholder="my username is Pascoal Kahamba"
              onChange={handleChange}
            />
          </div>
          <Button
            backgroundColor="#7695ec"
            color="#fff"
            border="none"
            disabled={form.firstField === "" && true}
            onClick={() => setNextPage(true)}
          >
            ENTER
          </Button>
        </UserNameField>
      )}
    </div>
  );
};

export default App;
