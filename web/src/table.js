import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function verifyType(type){
    if(type == "vacation"){
      return (
        <di> is on </di>
      );
  
    }else{
      return (
        <di> is </di>
      );
    }
}

export function BasicTable(absences){
      
    const useStyles = makeStyles({
      table: {
        minWidth: 650
      },
    });
  
    const classes = useStyles();
  
    return (
      <div>
     
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="Absences Table">
                <TableHead>
                  <TableRow>
                    <TableCell><h3>Name and Type of Absence</h3></TableCell>
                    <TableCell align="right"><h3>Start Date</h3></TableCell>
                    <TableCell align="right"><h3>End Date</h3></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {absences.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}{verifyType(row.type)}{row.type}
                    </TableCell>
                    <TableCell align="right">{row.startDate}</TableCell>
                    <TableCell align="right">{row.endDate}</TableCell>
                  </TableRow>
                  ))}
              </TableBody>
              </Table>
            </TableContainer>

      </div>
    );
}
  
  