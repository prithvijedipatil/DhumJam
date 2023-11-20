import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Hidden } from "@mui/material";

const Map = ({ formData }) => {
  console.log(formData, "formdataaa");
  const options = {
    chart: {
      type: "column",
      backgroundColor: "#030303",
      style: {
        fontFamily: "serif",
        color: "#FFFFFF",
      },
    },
    colors: ["#F0C3F1"],
    title: {
      align: "left",
      text: "",
    },
    subtitle: {
      align: "left",
      text: "",
    },

    activeAxisLabelStyle: {
      color: "#12A9DB",
    },
    activeDataLabelStyle: {
      color: "#12A9DB",
    },

    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
      labels: {
        style: {
          color: "#FFFFFF",
        },
      },
      lineColor: "#FFFFFF",
      gridLineColor: "#030303",
    },

    yAxis: {
      title: {
        text: "₹",
      },
      gridLineColor: "#030303",
      labels: {
        enabled: false,
      },
      lineColor: "#FFFFFF",
      lineWidth: 0.5,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "",
        },
      },
    },

    // tooltip: {
    //   headerFormat: "",
    //   pointFormat:
    //     '<span style="color:{point.color}">{point.name}</span>: ₹ <b>{point.y:.2f}</b><br/>',
    // },

    series: [
      {
        name: "Browsers",
        colorByPoint: true,
        data: [
          {
            name: "Custom",
            y: formData.category_6,
            drilldown: "Custom",
          },
          {
            name: "Category 1",
            y: formData.category_7,
            drilldown: "Category 1",
          },
          {
            name: "Category 2",
            y: formData.category_8,
            drilldown: "Category 2",
          },
          {
            name: "Category 3",
            y: formData.category_9,
            drilldown: "Category 3",
          },
          {
            name: "Category 4",
            y: formData.category_10,
            drilldown: "Category 4",
          },
        ],
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },

      series: [
        {
          name: "Custom",
          id: "Custom",
          data: [
            ["v65.0", 0.1],
            ["v64.0", 1.3],
            ["v63.0", 53.02],
            ["v62.0", 1.4],
            ["v61.0", 0.88],
            ["v60.0", 0.56],
            ["v59.0", 0.45],
            ["v58.0", 0.49],
            ["v57.0", 0.32],
            ["v56.0", 0.29],
            ["v55.0", 0.79],
            ["v54.0", 0.18],
            ["v51.0", 0.13],
            ["v49.0", 2.16],
            ["v48.0", 0.13],
            ["v47.0", 0.11],
            ["v43.0", 0.17],
            ["v29.0", 0.26],
          ],
        },
        {
          name: "Category 1",
          id: "Category 1",
          data: [
            ["v58.0", 1.02],
            ["v57.0", 7.36],
            ["v56.0", 0.35],
            ["v55.0", 0.11],
            ["v54.0", 0.1],
            ["v52.0", 0.95],
            ["v51.0", 0.15],
            ["v50.0", 0.1],
            ["v48.0", 0.31],
            ["v47.0", 0.12],
          ],
        },
        {
          name: "Category 2",
          id: "Category 2",
          data: [
            ["v11.0", 6.2],
            ["v10.0", 0.29],
            ["v9.0", 0.27],
            ["v8.0", 0.47],
          ],
        },
        {
          name: "Category 3",
          id: "Category 3",
          data: [
            ["v11.0", 3.39],
            ["v10.1", 0.96],
            ["v10.0", 0.36],
            ["v9.1", 0.54],
            ["v9.0", 0.13],
            ["v5.1", 0.2],
          ],
        },
        {
          name: "Category 4",
          id: "Category 4",
          data: [
            ["v16", 2.6],
            ["v15", 0.92],
            ["v14", 0.4],
            ["v13", 0.1],
          ],
        },
      ],
    },
  };

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        style={{ padingBottom: "16px" }}
      />
    </>
  );
};

export default Map;
