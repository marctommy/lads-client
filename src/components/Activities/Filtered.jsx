import { React, useState } from "react";
import { ItemActivity } from "./ItemActivity";
function Filtered({ listOfActivities }) {
  const filteredData = listOfActivities.filter((activity) => {
    if (activity.category.toLowerCase().includes(listOfActivities)) {
      return activity;
    } else {
      return activity.category.toLowerCase().includes(listOfActivities);
    }
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <ItemActivity />
      ))}
    </ul>
  );
}

export default Filtered;
