import React from "react";

import { PersonProps } from "./Person.type";

export const Person = ({ name: { fname, lname } }: PersonProps) => {
  return (
    <div>
      {fname} {lname}
    </div>
  );
};
