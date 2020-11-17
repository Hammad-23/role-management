import React, { useEffect, useState } from "react";
import ButtonAppBar from "../../components/navbar";
import MediaCard from "../../components/card";
import { getJob } from '../../config/firebase'

function ApplyJobs() {
  const [jobss,setJobss]=useState([])
  
  useEffect(()=>{
   getJob().then(function(snapshot){
    let arr=[]
     snapshot.forEach(function(res){
       console.log(res.data())
       arr.push(res.data())
      //  console.log(arr)
      console.log(...arr)
       setJobss([...arr])
      //  console.log(jobss)
     })
     
   })
  },[])
  console.log(jobss)


  
  
  const data = [
    {
      title: "FullStack Developer",
      des:
        "We are looking for fullstack developer having strong hand on javascript, React, React Native, Node.js, MongoDB, Firebase, Experience required:(2-3 years), Salary: (50k-80k) ",
    },
  ];
  console.log(data);
 
 

  for(var i=0;i<jobss.length;i++){
    data.push(jobss[i]);
    console.log(jobss[i])
}
 
console.log(data)


 

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
