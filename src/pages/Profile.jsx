import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import useForm from "react-hook-form";

import "../styles/profile.css";
import { logOut } from "../helpers/clientSessionHelper";

export default function Profile() {
  useEffect(() => {
    document.documentElement.style.setProperty("--db-color", "#7541ac");
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <NavBar />
      <div className="profile-body">
        <h1>Profile</h1>
        <button className="cool-button" onClick={() => logOut()}>
          <h3>logout</h3>
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input ref={register} type="file" name="image"></input>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
