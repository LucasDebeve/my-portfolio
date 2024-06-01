import PropTypes from "prop-types";
import TabItem from "./TabItem.jsx";
import {useTranslation} from "react-i18next";

function TabsList({tabs = [], changeTab, id = ""}) {

  const {t} = useTranslation("global");

  return (
    <div className="flex flex-row justify-center gap-3 w-full sm:w-3/4 lg:w-1/2 xl:1/3 mx-auto scroll-mt-16" id={id}>
      {tabs.map((tab, index) => {
        return <TabItem key={index} active={tab.active} goTo={ () => changeTab(tab.reference) }>{t(`tabs.${tab.reference}`)}</TabItem>;
      })}
    </div>
  );
}

TabsList.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    reference: PropTypes.string,
    active: PropTypes.bool
  })),
  changeTab: PropTypes.func,
  id: PropTypes.string,
};


export default TabsList;