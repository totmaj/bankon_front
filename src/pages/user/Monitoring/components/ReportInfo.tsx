import React, { useContext, useEffect, useState } from "react";
import Papa from "papaparse";
import AppContext from "../../../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faChartColumn,
  faChartLine,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

const ReportInfo: React.FC = () => {
  const [dataList, setDataList] = useState<string[]>([]);
  const { user } = useContext(AppContext);
  const fetchCsv = async (url: string): Promise<string[]> => {
    const response = await fetch(url);
    const text = await response.text();
    return new Promise((resolve, reject) => {
      Papa.parse<string[]>(text, {
        header: false,
        complete: (results) => {
          const rows = results.data as string[][];
          if (rows.length > 1) {
            resolve(rows[1]);
          } else {
            resolve([]);
          }
        },
        error: (err: any) => reject(err),
      });
    });
  };

  const fetchAllCsvs = async () => {
    try {
      const values = await fetchCsv(
        import.meta.env.VITE_BASE_CSVFILE + user?.username + ".csv"
      );

      setDataList(values);
    } catch (error) {
      console.error("Failed to fetch CSVs:", error);
    }
  };

  useEffect(() => {
    if (user?.username) fetchAllCsvs();

    const interval = setInterval(() => {
      fetchAllCsvs();
    }, 60000); // 60 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [user]);

  return (
    <div className=" flex flex-col gap-6">
      <div className="grid lg:grid-cols-4 xs:grid-cols-1 text-white font-bold md:grid-cols-2 gap-6">
        <div
          className="bg-secondary rounded-lg flex flex-row p-6 
      items-center justify-between"
        >
          <div className="text-primary">
            <FontAwesomeIcon icon={faChartLine} size="3x" />
          </div>
          <div className="flex flex-col">
            <span className="text-light">Base Invest</span>
            <span> {dataList?.[0] || "Loading..."} </span>
          </div>
        </div>
        <div
          className="bg-secondary rounded-lg flex flex-row p-6 
      items-center justify-between"
        >
          <div className="text-primary">
            <FontAwesomeIcon icon={faChartColumn} size="3x" />
          </div>
          <div className="flex flex-col">
            <span className="text-light">Last Transaction</span>
            <span>{dataList?.[1] || "Loading..."}</span>
          </div>
        </div>
        <div
          className="bg-secondary rounded-lg flex flex-row p-6 
      items-center justify-between"
        >
          <div className="text-primary">
            <FontAwesomeIcon icon={faChartArea} size="3x" />
          </div>
          <div className="flex flex-col">
            <span className="text-light">Total Profit</span>
            <span>{dataList?.[2] || "Loading..."}</span>
          </div>
        </div>
        <div
          className="bg-secondary rounded-lg flex flex-row p-6 
      items-center justify-between"
        >
          <div className="text-primary">
            <FontAwesomeIcon icon={faChartPie} size="3x" />
          </div>
          <div className="flex flex-col">
            <span className="text-light">Total Revenue</span>
            <span>{dataList?.[3] || "Loading..."}</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 xs:grid-cols-1 text-white font-bold md:grid-cols-2 gap-6">
        <div className="h-42 bg-secondary rounded-lg"></div>
        <div className="h-42 bg-secondary rounded-lg"></div>
      </div>
    </div>
  );
};

export default ReportInfo;
