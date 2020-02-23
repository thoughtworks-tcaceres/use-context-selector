import React, { useState } from "react";
import { useContext, useContextSelector } from "use-context-selector";
import { UserContext } from "../context";
import { emailSelector } from "../selectors/userSelectors";

const UserComponent = () => {
  const dispatch = useContextSelector(UserContext, v => v.dispatch);
  const email = useContextSelector(UserContext, emailSelector);
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: ""
  });

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <>
      <code>{email}</code>
      <p>
        Username:
        <input name="username" value={user.username} onChange={onChange} />
      </p>
      <p>
        First Name:{" "}
        <input name="firstName" value={user.firstName} onChange={onChange} />
      </p>
      <p>
        Last Name:
        <input name="lastName" value={user.lastName} onChange={onChange} />
      </p>
      <p>
        Email:
        <input name="email" value={user.email} onChange={onChange} />
      </p>
      <button onClick={() => dispatch({ type: "logout" })}>LOGOUT</button>
      <button onClick={() => dispatch({ type: "login", payload: user })}>
        LOGIN
      </button>
    </>
  );
};

export default UserComponent;
