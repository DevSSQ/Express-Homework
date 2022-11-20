import express from 'express';
import { IGrade, IPeople } from './types/generalTypes';


const app = express();

let people: IPeople[] = [];
let grades: IGrade[] = [];

//1. GET /name : returns all names
app.get('/name', (req, res) => {
    return res.json(people);
  });

//2. POST /name : posts new name
app.post('/name', (req, res) => {
    console.log('Enter your name: ', req.body.name);
    res.redirect('/'); });

//3. PUT /name : updates name
app.put('/name/:id', (req, res) => {
    let updated = req.body as IPeople;
    let pID = req.params.id;
    for (let i=0; i<people.length; i++){
      if(people[i].id == pID){
        people[i]=updated
      }
    }
    return res.json({
      message: 'Name updated!',
    });
  });

//4. DELETE/name : deletes name
app.delete('/name/:id', (req, res) => {
    const pID = req.params.id;
    for (let i=0; i<people.length; i++){
      if(people[i].id==pID){
        people.splice(i, 1);
      }
    }
    return res.json({
      message: 'Name deleted!'
    })
  });


  //1. GET /grade : returns all grades
  app.get('/grade', (req, res) => {
    return res.json(grades);
  });
  
  //2. POST /grade : posts new grade
  app.post('/grade', (req, res) => {
    let newGrade = req.body as IGrade;
    grades.push(newGrade);
    return res.json({
      message: 'Grade added!'
    });
  });
  
  //3. PUT /grade : updates grade
  app.put('/grade/:id', (req, res) => {
    let updated = req.body as IGrade;
    let gID = req.params.id;
    for (let i=0; i<grades.length; i++){
      if(grades[i].id == gID){
        grades[i]=updated
      }
    }
    return res.json({
      message: 'Grade updated!',
    });
  });
  
  //4. DELETE/grade : deletes grade
  app.delete('/grade/:id', (req, res) => {
    const gID = req.params.id;
    for (let i=0; i<grades.length; i++){
      if(grades[i].id==gID){
        grades.splice(i, 1);
      }
    }
    return res.json({
      message: 'Grade deleted!'
    })
  });
  


app.listen(5000)