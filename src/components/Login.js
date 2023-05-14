import { useState } from "react";
import React from "react";
import Input from "./Input";
import { loginFields } from "./formFields";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    console.log(loginFields);

    // const endpoint=`https://api.loginradius.com/identity/v2/auth/login?apikey=${apiKey}`;
    //  fetch(endpoint,
    //      {
    //      method:'POST',
    //      headers: {
    //      'Content-Type': 'application/json'
    //      },
    //      body:JSON.stringify(loginFields)
    //      }).then(response=>response.json())
    //      .then(data=>{
    //         //API Success from LoginRadius Login API
    //      })
    //      .catch(error=>console.log(error))
  };

  return (
    <form className="mt-8 mx-20 space-y-6">
      <div className="-space-y-px w-1/5 mx-auto">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            className="w-full"
          />
        ))}
      </div>
      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
