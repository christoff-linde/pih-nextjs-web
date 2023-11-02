import { Suspense } from "react";
import Graph from "./Chart";
import { demoData } from "./data";
const getData = async (
  baseUrl = "http://localhost:8000/api/client/v1/all-data" as string
) => {
  let endpoint = `${baseUrl}`;
  const response = await fetch(endpoint, {
    method: "GET",
  });
  const responseJson = await response.json();
  return responseJson;
};

const DashboardPage = async () => {
  const data = await getData();
  return (
    <div>
      <h1 className="text-3xl">Dashboard</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Graph data={data} />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
