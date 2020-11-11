import React from 'react';
import ButtonAppBar from "../../components/navbar";
import MediaCard from '../../components/card'


function ApplyJobs(){
  const data=[{
    jobTitle: 'FullStack Developer',
    jobDes: 'We are looking for fullstack developer having strong hand on javascript, React, React Native, Node.js, MongoDB, Firebase, Experience required:(2-3 years), Salary: (50k-80k) '
  }]
  console.log(data)

    data.push({jobTitle: 'Frontend Developer',
    jobDes: 'Factual Code is looking for Frontend Developer who have expertise in HTML5, CSS3, Bootstrap, JavaScript, React.js, Experience:(1 year atleast), Salary: (30k-50k)'
  })

   
  
 
    return(
        <>


      <ButtonAppBar text='Jobs For You' title='Log Out'/>
      {data.map((item)=>{
        return(

          <div style={{display: 'flex',justifyContent:'center',alignItems:'center',backgroundColor: 'gray'}}>
          <div style={{marginTop: '3rem'}}>
            <MediaCard item={item}/>
          </div>
        </div>

        )
      })}
     



        </>


    )
}

export default ApplyJobs