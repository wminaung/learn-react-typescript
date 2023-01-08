type StatusProp = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProp) => {
  let message;
  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "Data fetached successfully!";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }

  return <div>Status</div>;
};
