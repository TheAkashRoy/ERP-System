import React from "react";
import { Calendar } from "antd";

const holidayData = {
  "2023-11-25": [{ type: "public", content: "Thanksgiving" }],
  "2023-12-25": [{ type: "public", content: "Christmas Day" }],
  "2023-11-10": [{ type: "public", content: "Chhuttiiiii" }],
  "2023-11-20": [{ type: "public", content: "meow" }],
  // Add more holiday data as needed
};
export const StudCalendar = () => {
  const dateCellRender = (value) => {
    const date = value.format("YYYY-MM-DD");
    const holidayInfo = holidayData[date];

    return (
      <div>
        {holidayInfo ? (
          <h3 className="bg-red-100 w-full lg:p-8 font-semibold text-red-900 text-center">
            {holidayInfo[0].content}
          </h3>
        ) : null}
      </div>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />;
};
