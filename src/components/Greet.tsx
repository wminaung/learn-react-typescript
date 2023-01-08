type GreetProps = {
  name: string;
  message?: number;
};

export const Greet = ({ name, message = 0 }: GreetProps) => {
  return (
    <div>
      <h2>
        welcome <code>{name}</code>! you have {message} unread messages
      </h2>
    </div>
  );
};
