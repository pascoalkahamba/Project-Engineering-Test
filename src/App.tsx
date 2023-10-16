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

export function validateField(nameField: string) {
  return (
    (nameField === "" && "O campo nome não pode estar vazio.") ||
    (!Number.isNaN(+nameField) &&
      "O valor do campo nome não pode ser um numero.")
  );
}

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

  const validateUsername = validateField(form.firstField);

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
              placeholder="Input your username"
              onChange={handleChange}
            />
          </div>
          <Button
            backgroundColor="#7695ec"
            color="#fff"
            border="none"
            disabled={validateUsername && true}
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
