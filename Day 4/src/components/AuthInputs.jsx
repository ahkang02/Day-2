import { useState } from "react";
import { styled } from "styled-components";

// const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${({ invalid }) => (invalid ? "#f87171" : "#6b7280")};
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   background-color: ${({ invalid }) => (invalid ? "#fed2d2" : "#d1d5db")};
//   color: ${({ invalid }) => (invalid ? "#ef4444" : "#374151")};
//   border-color: ${({ invalid }) => (invalid ? "#f73f3f" : "transparent")};
//   border: 1px solid transparent;
//   border-radius: 0.25rem;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <label
            className={
              emailNotValid
                ? "block mb-2 text-xs font-bold tracking-wide uppercase text-red-400"
                : "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300"
            }
          >
            Email
          </label>
          <input
            type="email"
            invalid={emailNotValid}
            onChange={(event) => handleInputChange("email", event.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300"
          />
        </p>
        <p>
          <label
            className={
              emailNotValid
                ? "block mb-2 text-xs font-bold tracking-wide uppercase text-red-400"
                : "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300"
            }
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300"
            type="password"
            invalid={emailNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button
          className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500 focus:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 float-end"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
