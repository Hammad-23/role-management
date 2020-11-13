import React, { useEffect, useState } from "react";
import ButtonAppBar from "../../components/navbar";
import MediaCard from "../../components/card";
import { getJob } from '../../config/firebase'

function ApplyJobs() {
  const [jobss,setJobss]=useState([])
  useEffect(() => {
    const fetchData=async ()=>{
     const giveJob = await getJob()
     console.log(giveJob)
     let arr=[]
     giveJob.forEach((res)=>{
         arr.push(res.data())
    
     })
    setJobss(...arr)
    }
    fetchData()
    
      }, []);
    console.log(jobss)
  
  const data = [
    {
      jobTitle: "FullStack Developer",
      jobDes:
        "We are looking for fullstack developer having strong hand on javascript, React, React Native, Node.js, MongoDB, Firebase, Experience required:(2-3 years), Salary: (50k-80k) ",
    },
  ];
  console.log(data);

  data.push({
    jobTitle: jobss.title,
    jobDes:
      jobss.des
  });


 

  return (
    <>
      <ButtonAppBar text="Jobs For You" title="Log Out" />
      {data.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "gray",
            }}
          >
            <div style={{ marginTop: "3rem" }}>
              <MediaCard item={item} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ApplyJobs;
