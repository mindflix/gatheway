import React, { useState } from "react";

function Login() {
  return (
    <React.Fragment>
      <FormLogin />
    </React.Fragment>
  );
}

function FormLogin() {
  const [email, setEmail] = useState("");
  const [mdp, setMDP] = useState("");

  function handleChange(handler, e) {
    handler(e.target.value);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <form className="form">
          <Field
            name="name"
            value={email}
            onChange={(e) => handleChange(setEmail, e)}
          >
            Email
          </Field>
          <Field
            name="firstName"
            value={mdp}
            onChange={(e) => handleChange(setMDP, e)}
          >
            Mot de passe
          </Field>
          <button type="submit" className="btn">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

function Field(props) {
  const { name, value, onChange, children } = props;
  return (
    <div className="form--group">
      <label htmlFor={name}>{children}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className="form--name"
      />
    </div>
  );
}

export default Login;
