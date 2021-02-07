import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

function handleChange(handler, e) {
  handler(e.target.value);
}

function Login() {
  const [isNewUser, setNewUser] = useState(false);

  function handleNewUser() {
    setNewUser(!isNewUser);
  }

  return (
    <div className="oneview">
      <div className="wrapper">
        <div className="container">
          {isNewUser ? (
            <SignUp handleNewUser={handleNewUser} />
          ) : (
            <SignIn handleNewUser={handleNewUser} />
          )}
        </div>
      </div>
      <div className="motif"></div>
    </div>
  );
}

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [mdp, setMDP] = useState("");
  return (
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
      <div className="form--group">
        <button type="submit" className="btn">
          Se connecter
        </button>
        <p onClick={props.handleNewUser}>
          Vous n'avez toujours pas de compte ?
        </p>
      </div>
    </form>
  );
}

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [mdp, setMDP] = useState("");
  const [cmdp, setCMDP] = useState("");
  return (
    <form className="form">
      <span onClick={props.handleNewUser}>
        <IoArrowBackOutline size={24} />
      </span>
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
      <Field
        name="firstName"
        value={cmdp}
        onChange={(e) => handleChange(setCMDP, e)}
      >
        Confirmer le mot de passe
      </Field>
      <div className="form--group">
        <button type="submit" className="btn">
          S'inscrire
        </button>
      </div>
    </form>
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
      />
    </div>
  );
}

export default Login;
