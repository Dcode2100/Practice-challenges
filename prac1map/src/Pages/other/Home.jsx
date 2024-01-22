import { useState, useEffect, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_indiaLow from "@amcharts/amcharts5-geodata/indiaLow";

const IndiaMap = () => {
  useLayoutEffect(() => {
    // Create root and chart
    let root = am5.Root.new("chartdiv");

    let chart = root.container.children.push(am5map.MapChart.new(root, {
      fillOpacity: 1, // set fill opacity to 0.5 (50% transparent)
        strokeOpacity: 1, // set stroke opacity to 0.8 (80% transparent)
        fill: am5.color(0xffffff), // set fill color to black
        stroke: am5.color(0x000000), // set stroke color to black
        strokeWidth: "10", // set stroke width to 2 pixels
    }));

    // Create polygon series
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_indiaLow,
        fillOpacity: 1, // set fill opacity to 0.5 (50% transparent)
        strokeOpacity: 1, // set stroke opacity to 0.8 (80% transparent)
        fill: am5.color(0xffffff), // set fill color to black
        stroke: am5.color(0x000000), // set stroke color to black
        strokeWidth: "10px", // set stroke width to 2 pixels
      })
    );
    
    
    //  Add custom data for Maharashtra and set its background color to orange
     polygonSeries.data.push({
      id: "IN-MM",
      fill: am5.color(255, 165, 0),
    });

    polygonSeries.mapPolygons.each((mapPolygon) => {
      if (mapPolygon.dataItem.dataContext.id === "IN-MM") {
        mapPolygon.fill = mapPolygon.dataItem.dataContext.fill;
      }
    });

    // Configure series
    root.current = root; // <--- This is the line that fixed it

    // Clean up on unmount

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default IndiaMap;
