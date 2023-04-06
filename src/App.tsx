import {
  Button,
  FirstTitle,
  Footer,
  GlobalStyle,
  Header,
  SecondButton,
  Section,
  Typographies,
} from "./styles/GlobalStyles";
import { SvgIcon, IconQuestion } from "./svgIcon";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Section>
        <Header>
          <Button>Coding test</Button>
          <SvgIcon />
        </Header>

        <FirstTitle>Engineering Test</FirstTitle>
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
