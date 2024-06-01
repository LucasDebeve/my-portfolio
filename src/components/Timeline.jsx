import PropTypes from "prop-types";
import {useState} from "react";

function Timeline({data}) {

  data.sort((a, b) => {
    return new Date(b.dateDeb) - new Date(a.dateDeb);
  });

  const firstDate = new Date(data[data.length - 1].dateDeb);


  const nbMonthsBetween = (date1, date2) => {
    if (typeof date1 === "string") date1 = new Date(date1);
    if (typeof date2 === "string") date2 = new Date(date2);

    return (date2.getFullYear() - date1.getFullYear()) * 12 + date2.getMonth() - date1.getMonth();
  };

  const maxMonths = nbMonthsBetween(firstDate, new Date());

  data.map((item) => {
    item.dateDeb = new Date(item.dateDeb);
    if (item.dateFin === "now") {
      item.dateFin = new Date();
    } else {
      item.dateFin = new Date(item.dateFin);
    }
    item.duration = {
      years: item.dateFin.getFullYear() - item.dateDeb.getFullYear(),
      months: nbMonthsBetween(item.dateDeb, item.dateFin) % 12,
    }

    item.dateDeb = item.dateDeb.toDateString();
    item.dateFin = item.dateFin.toDateString();

    return item;
  });

  const containerStyle = {
    gridTemplateColumns: `repeat(${maxMonths}, ${100 / maxMonths}%)`,
    gridTemplateRows: `repeat(${data.length} + 2, 1fr)`,
    gridRowGap: "1rem",
  };

  return (
    <div className={`grid`} style={containerStyle}>
      {data.map((item, index) => {
        console.log(`titre: ${item.title}`)
        const itemStyle = {
          gridColumnStart: nbMonthsBetween(firstDate, item.dateDeb) + 1,
          gridColumn: (nbMonthsBetween(firstDate, item.dateDeb) + 1) + " / " + (nbMonthsBetween(firstDate, item.dateFin) + 1),
          gridRowStart: index + 1,
          gridRowEnd: index + 2,
        };

        return (
          <div key={index} style={itemStyle}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p className="w-max">{item.dateDeb} - {item.dateFin}</p>
            <p>{`${item.duration.years > 1 ? `${item.duration.years} années` : (item.duration.years === 0 ? '' : `${item.duration.years} an`)}${item.duration.years > 0 && item.duration.months > 0 ? ' et ' : ''}${item.duration.months > 0 ? `${item.duration.months} mois` : ''}`}</p>
            <div className="h-1 bg-blue-500 w-full rounded-full">
            </div>
          </div>
        );
      })}
    </div>);
}

Timeline.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    dateDeb: PropTypes.string.isRequired,
    dateFin: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
};

Timeline.defaultProps = {
  data: [{
    title: "Title2", dateDeb: "05/01/2022", dateFin: "now", description: "Description",
  }, {
    title: "Title", dateDeb: "01/01/2021", dateFin: "01/01/2023", description: "Description",
  }, {
    title: "Title3", dateDeb: "01/01/2023", dateFin: "01/01/2024", description: "Description",
  }, {
    title: "Title4", dateDeb: "01/08/2023", dateFin: "01/10/2023", description: "Description",
  } ],
};


export default Timeline;