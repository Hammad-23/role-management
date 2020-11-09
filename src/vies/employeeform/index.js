import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BasicTextFields from "../../components/input";
import CustomButton from "../../components/button";
import { profileInfo } from "../../config/firebase";
import { getData } from "../../config/firebase";
function EmployeeForm(props) {

const [hold,setHold]=useState([])
const [text,setText]=useState('')
const [text2,setText2]=useState('')
const [text3,setText3]=useState('')
const [text4,setText4]=useState('')
const [num1,setNum1]=useState('')
const [text5,setText5]=useState('')
const [num2,setNum2]=useState('')
  let history = useHistory();

  useEffect(() => {
    const fetchData=async ()=>{
     const giveData = await getData()
     console.log(giveData)
     let arr=[]
     giveData.forEach((res)=>{
         arr.push(res.data())
    
     })
    setHold(...arr)
    }
    fetchData()
    
      }, []);
    console.log(hold)

    useEffect(()=>{
      setText(hold.profileName)
      setText2(hold.education)
      setText3(hold.degree)
      setText4(hold.school)
      setNum1(hold.num)
      setText5(hold.adress)
      setNum2(hold.age)

    },[hold])

  const [profileName, setName] = useState("");
  const [education, setEdu] = useState("");
  const [degree, setDegree] = useState("");
  const [school, setSchool] = useState("");
  const [num, setNum] = useState("");
  const [adress, setAdress] = useState("");
  const [age, setAge] = useState("");

  const fullName = (e) => {
    const val = e.target.value;
    setName(val);
  };

  const highestEducation = (e) => {
    const val = e.target.value;
    setEdu(val);
  };

  const lastDegree = (e) => {
    const val = e.target.value;
    setDegree(val);
  };

  const lastSchool = (e) => {
    const val = e.target.value;
    setSchool(val);
  };

  const number = (e) => {
    const val = e.target.value;
    setNum(val);
  };

  const currentAdress = (e) => {
    const val = e.target.value;
    setAdress(val);
  };

  const yourAge = (e) => {
    const val = e.target.value;
    setAge(val);
  };
  const userId = localStorage.getItem("ID");
  const information = {
    profileName,
    education,
    degree,
    school,
    num,
    adress,
    age,
    userId,
  };

  const submit = async function () {
    try {
      await profileInfo(information);
      alert("Your Information have been saved,Thankyou");

      history.push("/dashboardemployee");
    } catch (error) {
      alert(error.message);
    }
  };
  // const find=props.show.profileName
  // console.log(props.show)
  

  return (
    <>
      <div style={{ backgroundColor: "#01064f", height: "4rem" }}>
        <h1 style={{ color: "white" }}>Enter Your Correct Information</h1>
      </div>

      <div>
        <BasicTextFields
          onChange={fullName}
          value={text}
          id="standard-basic"
          label="Enter Your Full Name"
        />
      </div>
      <div>
        <BasicTextFields
          onChange={highestEducation}
          value={text2}
          id="standard-basic"
          label="Enter highest Education"
        />
      </div>
      <div>
        <BasicTextFields
          onChange={lastDegree}
          value={text3}
          id="standard-basic"
          label="Enter Last Degree Name"
        />
      </div>
      <div>
        <BasicTextFields
          onChange={lastSchool}
          value={text4}
          id="standard-basic"
          label="Enter Last School Name"
        />
      </div>
      <div>
        <BasicTextFields
          onChange={number}
          value={num1}
          id="standard-basic"
          label="Enter Mobile Number"
          type="number"
        />
      </div>
      <div>
        <BasicTextFields
          onChange={currentAdress}
          value={text5}
          id="standard-basic"
          label="Enter Your Current adress"
        />
      </div>
      <div>
        <BasicTextFields
          onChange={yourAge}
          value={num2}
          id="standard-basic"
          label="Enter Your Age"
          type="number"
        />
      </div>
      <div>
        <CustomButton
          onClick={submit}
          text="Submit"
          variant="contained"
          color="primary"
        />
      </div>
    </>
  );
}

export default EmployeeForm;
