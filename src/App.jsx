import Header from './components/Header.jsx';
import Hero from "./components/Hero.jsx";
import Timeline from "./components/Timeline";
import Container from "./components/Container";
import {useTranslation} from "react-i18next";
import Columns from "./components/Columns.jsx";
import TabsList from "./components/Tabs/TabsList.jsx";
import {useEffect, useState} from "react";


function App() {

  const [tabs, setTabs] = useState([
    {reference: "developer", active: true},
    {reference: "artist", active: false},
  ]);

  const [ tab, setTab ] = useState("developer");

  // eslint-disable-next-line no-unused-vars
  const {t} = useTranslation(tab);

  useEffect(() => {
    setTabs(tabs.map((pan) => {
      pan.active = pan.reference === tab;
      return pan;
    }));
  }, [tab]);

  return (
    <>
      <Header tab={tab}/>
      <Hero/>
      <Container>
        <TabsList tabs={tabs} changeTab={setTab} id="tabs"/>
        <Columns>
          {/* TODO internationalisation des Alt */}
          <img src="/img/Code%20typing.svg" alt="illustration d'ordinateur"/>
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
