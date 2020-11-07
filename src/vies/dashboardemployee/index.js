import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CustomButton from "../../components/button";
import FloatingActionButtons from "../../components/floatingbutton";
import ButtonAppBar from "../../components/navbar";
import FloatingEditButton from '../../components/floatingedit'

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
const [see,setSee]=useState(true)
const [float,setFloat]=useState(true)
// if(show!==null){
//   setSee(false)
// }else{
//   setSee(true)
// }
useEffect(()=>{
  if(show.length===null){
    console.log('khali hai')
   setSee(true)
   setFloat(false)
  }else{
    console.log('full hai')
   setSee(false)
   setFloat(true)
  }
},[])

  return (
    <>
      <ButtonAppBar text="Dashboard Of Employee" title="Log Out" />

    { see&& <FloatingActionButtons
        onClick={() => {
          history.push("/employeeform");
        }}
        color="primary"
      /> }
    { float&& <FloatingEditButton/> }
    </>
  );
}

export default DashboardEmployee;
