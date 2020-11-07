import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CustomButton from "../../components/button";
import FloatingActionButtons from "../../components/floatingbutton";
import ButtonAppBar from "../../components/navbar";

import { getData } from "../../config/firebase";

function DashboardEmployee() {
    const [show,setShow]=useState([])
  let history = useHistory();
  useEffect(() => {
const fetchData=async ()=>{
 const giveData = await getData()
 console.log(giveData)
 let arr=[]
 giveData.forEach((res)=>{
     arr.push(res.data())

 })
setShow(...arr)
}
fetchData()

  }, []);
console.log(show)
  return (
    <>
      <ButtonAppBar text="Dashboard Of Employee" title="Log Out" />

      <FloatingActionButtons
        onClick={() => {
          history.push("/employeeform");
        }}
        color="primary"
      />
    </>
  );
}

export default DashboardEmployee;
