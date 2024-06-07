import Header from './components/Header.jsx';
import Hero from "./components/Hero.jsx";
import Timeline from "./components/Timeline";
import Container from "./components/Container";
import {useTranslation} from "react-i18next";
import Columns from "./components/Columns.jsx";
import TabsList from "./components/Tabs/TabsList.jsx";
import {useEffect, useState} from "react";
import BentoGrid from "./components/Bento/BentoGrid.jsx";
import BentoCell from "./components/Bento/BentoCell.jsx";
import ProjectsList from "./components/Projects/ProjectsList.jsx";
import Footer from "./components/Footer.jsx";


function App() {

  const [ filters, setFilters ] = useState([]);

  const updateFilters = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const [tabs, setTabs] = useState([
    {reference: "developer", active: true},
    {reference: "artist", active: false},
  ]);

  // Get the current tab in query params
  const urlParams = new URLSearchParams(window.location.search);
  const tabFromUrl = urlParams.get("tab") || "developer";

  const [ tab, setTab ] = useState(tabFromUrl);

  // eslint-disable-next-line no-unused-vars
  const {t} = useTranslation([tab, "global"]);

  useEffect(() => {
    setTabs(tabs.map((pan) => {
      // Update the query params
      window.history.pushState({}, "", `?tab=${tab}`);
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
        <Timeline leftMargin={2} rightMargin={2} tab={tab} id="timeline"/>
        <BentoGrid title={t("skills.title")} className={t("skills.twoRows") ? "lg:grid-rows-2" : "lg:grid-rows-3"} id="skills">
          {t("skills.list", {returnObjects: true}).map((skill, index) => {
            return (
              <BentoCell
                key={index}
                rowSpan={skill.rowSpan}
                colSpan={skill.colSpan}
                src={skill.src}
                updateFilters={updateFilters}>
                {skill.title}
              </BentoCell>
            )
          })
          }
        </BentoGrid>
        <ProjectsList projects={t("projects.list", {returnObjects: true})} filters={filters} title={t("projects.title")} id="projects" />
      </Container>
      <Footer authorText={t("author", {ns: "global"})} />
    </>
  )
}

export default App
