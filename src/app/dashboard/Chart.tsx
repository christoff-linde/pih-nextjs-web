"use client";
import React from "react";
import Plot from "react-plotly.js";

const Graph = ({ data }) => {
  console.log(data);
  // example data format
  // [
  //   {
  //     timestamp: "2023-11-02T13:54:39.029524992",
  //     sensor_id: "DHT22_01",
  //     temperature: 22.6,
  //     humidity: 54.7,
  //   },
  //   {
  //     timestamp: "2023-11-02T13:54:41.137007104",
  //     sensor_id: "DHT22_01",
  //     temperature: 22.6,
  //     humidity: 53.3,
  //   },
  //   {
  //     timestamp: "2023-11-02T13:54:43.270701824",
  //     sensor_id: "DHT22_01",
  //     temperature: 22.6,
  //     humidity: 55,
  //   },
  //   {
  //     timestamp: "2023-11-02T13:54:45.306562048",
  //     sensor_id: "DHT22_01",
  //     temperature: 22.6,
  //     humidity: 55.1,
  //   },
  //   {
  //     timestamp: "2023-11-02T13:54:47.347251968",
  //     sensor_id: "DHT22_01",
  //     temperature: 22.6,
  //     humidity: 55.1,
  //   },
  // ];
  // format to be compatible with plotly
  const yeet = {
    time: data.map((d) => d.timestamp),
    temp: data.map((d) => d.temperature),
    hum: data.map((d) => d.humidity),
  };
  console.log(yeet);

  return (
    <div>
      <h1 className="text-xl">Graph</h1>
      <Plot
        data={[
          {
            x: yeet.time,
            y: yeet.temp,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          {
            x: yeet.time,
            y: yeet.hum,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "blue" },
          },
        ]}
        layout={{
          width: 1240,
          height: 640,
          title: "A Fancy Plot",
          xaxis: {
            title: "x-axis",
          },
          yaxis: {
            title: "y-axis",
          },
        }}
      />
    </div>
  );
};

export default Graph;
