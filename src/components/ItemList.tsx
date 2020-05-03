import React from "react";
import { Item } from "./Item";
export function ItemList() {
  // Declare a new state variable, which we'll call "count"
  const records: any = [
    {
      records: [
        {
          id: "rec07efX4Q0yM40t6",
          fields: {
            Hours: 1,
            Type: ["rec63cfRYPVES75n5"],
            Started: "2018-03-11",
            "Work performed": "Uppakoma",
          },
          createdTime: "2013-02-22T21:27:34.000Z",
        },
        {
          id: "rechPNefIYGJYCdBj",
          fields: {
            Hours: 5,
            Type: ["recW55i0XPZwEa6pX"],
            Started: "2018-03-11",
            "Work performed": "Ecolab",
          },
          createdTime: "2018-03-11T21:54:58.000Z",
        },
        {
          id: "recN9IOKaP3obNysC",
          fields: {
            Hours: 1,
            Type: ["rec63cfRYPVES75n5"],
            Started: "2018-03-11",
            "Work performed": "Registry App",
          },
          createdTime: "2018-03-11T21:56:14.000Z",
        },
      ],
      offset: "recN9IOKaP3obNysC",
    },
  ];
  return (
    <div>
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}
