import React, { useState } from "react";
import CustomButton from "../../components/button";
import BasicTextFields from "../../components/input";
import BoxTextFields from "../../components/boxinput";
import { jobReq } from "../../config/firebase";
import { useHistory } from "react-router-dom";

function PostJob() {
  const [title,setTitle]=useState('')
  const [des,setDes]=useState('')
  let history = useHistory();
  const jobtitle=(e)=>{
    const val=e.target.value
    setTitle(val)

  }
  const jobdes=(e)=>{
   const val=e.target.value
   setDes(val)

  }
  const requirements={
    title,
    des
  }

  const post = async function () {
    try {
      await jobReq(requirements);
      alert("Your JOB has been posted,Thankyou");

      history.push("/dashboardcompany");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "darkblue",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Post A Job</h1>
      </div>

      <div
        style={{ marginTop: "5rem", display: "flex", justifyContent: "center" }}
      >
        <BasicTextFields onChange={jobtitle} id="standard-basic" label="Enter Job Title" />
      </div>

      <div
        style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}
      >
        <BoxTextFields
          onChange={jobdes}
          id="outlined-basic"
          label="Enter Job Description"
          variant="outlined"
        />
      </div>

      <div
        style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}
      >
        <CustomButton onClick={post} color="primary" text="Post" variant="contained"  />
      </div>
    </>
  );
}

export default PostJob;
