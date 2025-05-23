import axios from "axios";
import React from "react";
import { useState } from "react";
import { DiComposer } from "react-icons/di";
// import { AiOutlineFileText } from "react-icons/ai";

const Profile = () => {
  const [profile, setProfile] = useState("");

  const user = async () => {
    const response = await axios.get("http://localhost:8000/user/profile");
    setProfile(response.data.data);

    if(response === 200){
      console.log(response.data.data);
    }
  };
  return (
    <>
      <h1>
        Profile <DiComposer />

        <h3>{response.data.name}</h3>
        {/* <AiOutlineFileText/> */}
      </h1>
    </>
  );
};

export default Profile;
