import PropTypes from "prop-types";
import {useState} from "react";
import {useTranslation} from "react-i18next";

function Timeline({ leftMargin, rightMargin}) {

  const {t} = useTranslation("global");
  const data = t("xp.timeline", {returnObjects: true});

  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 640px)").matches);

  window.matchMedia("(max-width: 640px)").addEventListener("change", (e) => {
    setIsMobile(e.matches);
  });

  data.sort((a, b) => {
    return new Date(b.dateDeb) - new Date(a.dateDeb);
  });

  const firstDate = new Date(data[data.length - 1].dateDeb);

  // Apply left margin
  firstDate.setMonth(firstDate.getMonth() - leftMargin);

  const nbMonthsBetween = (date1, date2) => {
    if (typeof date1 === "string") date1 = new Date(date1);
    if (typeof date2 === "string") date2 = new Date(date2);

    return (date2.getFullYear() - date1.getFullYear()) * 12 + date2.getMonth() - date1.getMonth();
  };

  // Apply right margin
  const maxMonths = nbMonthsBetween(firstDate, new Date()) + rightMargin;

  data.map((item) => {
    item.dateDeb = new Date(item.dateDeb);
    if (item.dateFin === "now") {
      item.dateFin = new Date();
    } else {
      item.dateFin = new Date(item.dateFin);
    }
    item.duration = {
      years: Math.floor(nbMonthsBetween(item.dateDeb, item.dateFin) / 12),
      months: nbMonthsBetween(item.dateDeb, item.dateFin) % 12,
    }

    item.dateDeb = item.dateDeb.toDateString();
    item.dateFin = item.dateFin.toDateString();

    return item;
  });

  const containerStyle = {
    gridTemplateColumns: `repeat(${maxMonths}, ${100 / maxMonths}%)`,
    gridTemplateRows: `repeat(${data.length} + 3, 1fr)`,
    gridRowGap: "1rem",
    gridColumnGap: "0",
  };

  const colors = ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-amber-500"];

  return (<>
      <h2 className="text-2xl text-gray-800 dark:text-gray-300">{t("xp.title")}</h2>
      <div className="grid overflow-x-auto text-gray-800 dark:text-gray-300" style={containerStyle}>
        {data.map((item, index) => {
          const itemStyle = {
            gridColumnStart: nbMonthsBetween(firstDate, item.dateDeb) + 1,
            gridColumn: (nbMonthsBetween(firstDate, item.dateDeb) + 1) + " / " + (nbMonthsBetween(firstDate, item.dateFin) + 1),
            gridRowStart: index + 1,
            gridRowEnd: index + 2,
          };

          const color = colors[index % colors.length];

          return (
            <div key={index} style={itemStyle}>
              <p className="text-lg">{item.title}</p>
              <p className="text-sm text-gray-600 whitespace-nowrap dark:text-gray-400">{item.description}</p>
              <p className="text-sm text-gray-600 whitespace-nowrap pb-2 dark:text-gray-400">
                <span>
                  {`${item.duration.years > 1 ? `${item.duration.years} ${t("general.years")}` : (item.duration.years === 0 ? '' : `${item.duration.years} ${t("general.year")}`)}`}
                </span>
                <span>
                  {`${item.duration.years > 0 && item.duration.months > 0 ? ` ${t("general.and")} ` : ''}`}
                </span>
                <span>
                  {`${item.duration.months > 1 ? `${item.duration.months} ${t("general.months")}` : (item.duration.months === 0 ? '' : `${item.duration.months} ${t("general.month")}`)}`}
                </span>
              </p>
              <div className={`h-1.5 ${color} w-full rounded-full`}>
              </div>
            </div>
          );
        })}
        {/* Timeline arrow */}
        <div style={{
          gridArea: `${data.length + 1} / 1 / ${data.length + 2} / ${maxMonths + 1}`,
        }}>
          <div className="w-full h-1 bg-neutral-700 rounded-full dark:bg-neutral-400"></div>
        </div>
        {/* Timeline dates */}
        {Array.from({length: maxMonths}, (_, i) => {
          let k;
          isMobile ? k = 12 : k = 4;
          if (i % k !== 0) return null;
          const date = new Date(firstDate);
          date.setMonth(date.getMonth() + i);
          return (
            <div key={i} className="text-center" style={{
              gridColumn: i + 1,
              gridRow: data.length + 2,
            }}>
              {date.toLocaleString(`${t("lang")}-${t("country")}`, {month: "short"})} {date.getFullYear()}
            </div>
          );
        })}
      </div>
    </>
  );
}

Timeline.propTypes = {
  leftMargin: PropTypes.number,
  rightMargin: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    dateDeb: PropTypes.string.isRequired,
    dateFin: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
};

Timeline.defaultProps = {
  leftMargin: 0,
  rightMargin: 0,
  data: [{
    title: "Title2", dateDeb: "05/01/2022", dateFin: "now", description: "Description",
  }, {
    title: "Title", dateDeb: "01/01/2021", dateFin: "01/01/2023", description: "Description",
  }, {
    title: "Title3", dateDeb: "01/01/2023", dateFin: "01/01/2024", description: "Description",
  }, {
    title: "Title4", dateDeb: "08/01/2023", dateFin: "now", description: "Description",
  }],
};


export default Timeline;