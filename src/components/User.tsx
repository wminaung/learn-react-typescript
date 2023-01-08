import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "qung",
      email: "aung@aung",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>

      <div>user email : {user?.email} </div>
      <div>user name : {user?.name}</div>
    </div>
  );
};
