import React, { Component } from 'react';
import Customer from './componnents/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root :{
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table :{
      minWidth : 1080
  }
})

const customers =[
  {
    'id'   : 1,
    'image': 'https://placeimg.com/64/64/any',
    'name' : 'yoonseop' ,
    'sex'  : 'man' ,
    'age'  : 31,
    'job'  : "beginer"
  },
  {
    'id'   : 2,
    'image': 'https://placeimg.com/64/64/any',
    'name' : 'heesun' ,
    'sex'  : 'woman' ,
    'age'  : 31,
    'job'  : "animator"
  },
  {
    'id'   : 3,
    'image': 'https://placeimg.com/64/64/any',
    'name' : 'winter' ,
    'sex'  : 'woman' ,
    'age'  : 25,
    'job'  : "singer"
  }
]

class App extends Component{
  render() {
    const { classes } = this.props;
    return(
       <div>
        <Paper className ={classes.root}>
        <Table className ={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>나이</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          {customers.map( c=> { return( <Customer key ={c.id} id={c.id} image={c.image} name={c.name} sex={c.sex} job={c.job} age={c.age} /> ) })}
          </TableBody>
        </Table>
        </Paper>
       </div>
    )
  }
}
 
export default withStyles(styles)(App);