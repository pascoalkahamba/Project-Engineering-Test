import { useState } from "react";
import { Button, GlobalStyle, UserNameField } from "./styles/GlobalStyles";

interface FormProps {
  firstField: string;
  titleField: string;
  contentField: string;
}

const App = () => {
  const [form, setForm] = useState<FormProps>({
    firstField: "",
    titleField: "",
    contentField: "",
  });
  return (
    <div className="App">
      <GlobalStyle />
      <UserNameField>
        <p>Welcome to CodeLeap network!</p>
        <div className="username">
          <p>Please enter your username</p>
          <input type="text" name="" id="" placeholder="john doe" />
        </div>
        <Button>ENTER</Button>
      </UserNameField>
    </div>
  );
};

export default App;
