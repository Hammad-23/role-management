import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import  {getJob} from '../../config/firebase'

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('Software Engineer', 'We are looking for software engineer who have expertise in react.js and react native and node.js experience required at least 2 years.'),
  createData('Ice cream sandwich', 237),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {

    const [view,setView]=useState([])
  
    useEffect(()=>{
     getJob().then(function(snapshot){
      let arr=[]
       snapshot.forEach(function(res){
         console.log(res.data())
         arr.push(res.data())
        
        console.log(...arr)
         setView([...arr])
        
       })
       
     })
    },[])
    console.log(view)


  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Job Title</TableCell>
            <TableCell align="right">Job Description</TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {view.map((row) => (
            <TableRow key={row.title}>
              <TableCell style={{cursor: 'pointer'}} component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.des}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}