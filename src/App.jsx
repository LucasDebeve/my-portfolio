import Header from './components/Header.jsx';
import Hero from "./components/Hero.jsx";
import Timeline from "./components/Timeline";
import Container from "./components/Container";
import {useTranslation} from "react-i18next";
import Columns from "./components/Columns.jsx";
import TabsList from "./components/Tabs/TabsList.jsx";
import {useState} from "react";


function App() {

  const [ tab, setTab ] = useState("developer");

  // eslint-disable-next-line no-unused-vars
  const {t} = useTranslation(tab);

  return (
    <>
      <Header tab={tab}/>
      <Hero/>
      <Container>
        <TabsList tabs={
          [
            {reference: "developer", active: true},
            {reference: "artist"},
          ]
        } changeTab={setTab} id="tabs"/>
        <Columns>
          <img src="/img/Code%20typing.svg"/>
          <div className="text-sm my-auto">
            <p className="mb-3">
              &emsp;{t("aboutMe.firstParagraph")}
            </p>
            <p>
              &emsp;{t("aboutMe.secondParagraph")}
            </p>
          </div>
        </Columns>
        <Timeline leftMargin={2} rightMargin={2} tab={tab}/>
      </Container>
      <div className="h-svh"></div>
    </>
  )
}

export default App
