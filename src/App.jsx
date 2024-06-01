import Header from './components/Header.jsx';
import Hero from "./components/Hero.jsx";
import Timeline from "./components/Timeline";
import Container from "./components/Container";
import {useTranslation} from "react-i18next";


function App() {

  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation("global");

  return (
    <>
      <Header />
      <Hero />
      <Container>
        <Timeline leftMargin={2} rightMargin={2}/>
      </Container>
      <div className="h-svh"></div>
    </>
  )
}

export default App
