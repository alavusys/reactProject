const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

/*
app.get('/api/hello', (req , res ) => { 
    res.send({message : 'Hello Expres!'});
});
*/

app.get('/api/customers', (req,res)=> {
    res.send([
        {
            'id'   : 1,
            'image': 'https://icon-library.com/images/64-x-64-icon/64-x-64-icon-11.jpg',
            'name' : 'yoonseop' ,
            'sex'  : 'man' ,
            'age'  : 31,
            'job'  : "beginer"
          },
          {
            'id'   : 2,
            'image': 'https://icon-library.com/images/64-x-64-icon/64-x-64-icon-11.jpg',
            'name' : 'heesun' ,
            'sex'  : 'woman' ,
            'age'  : 31,
            'job'  : "animator"
          },
          {
            'id'   : 3,
            'image': 'https://icon-library.com/images/64-x-64-icon/64-x-64-icon-11.jpg',
            'name' : 'winter' ,
            'sex'  : 'woman' ,
            'age'  : 25,
            'job'  : "singer"
          }
    ]);
});

app.listen(port , () => console.log(`Listening on Port ${port}`));