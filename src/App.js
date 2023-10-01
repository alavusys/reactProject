import React, { Component } from 'react';
import Customer from './componnents/Customer';
import './App.css';

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
    return(
       <div>
{
  customers.map( c=> {
    return(
      <Customer key ={c.id}
        id={c.id}
        image={c.image}
        name={c.name}
        sex={c.sex}
        job={c.job}
        age={c.age}
      />
    )
  })
}

       </div>
    )
  }
}
 
export default App;