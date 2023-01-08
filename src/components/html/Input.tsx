import React from "react";

type CustomInputProps = React.ComponentProps<"input">;

export const CustomInput = (props: CustomInputProps) => {
  return <input {...props} />;
};
