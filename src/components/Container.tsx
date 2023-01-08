import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};

export const Container = ({ styles }: ContainerProps) => {
  return <div style={styles}>Container</div>;
};
