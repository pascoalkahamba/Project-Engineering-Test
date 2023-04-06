import {
  Button,
  FirstTitlle,
  Footer,
  GlobalStyle,
  Header,
  SecondButton,
  Section,
  Typographies,
} from "./styles/GlobalStyle";
import { SvgIcon, IconQuestion } from "./svgIcon";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Section>
        <Header>
          <Button>Coding test</Button>
          <SvgIcon />
        </Header>

        <FirstTitlle>Engineering Test</FirstTitlle>
        <Typographies>
          <p>CodeLeap coding test</p>
          <p>Working on designs:</p>
        </Typographies>
        <Footer>
          <IconQuestion />
          <SecondButton>COMPLETED</SecondButton>
        </Footer>
      </Section>
    </div>
  );
};

export default App;
