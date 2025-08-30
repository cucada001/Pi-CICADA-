const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/api/approve',(req,res)=>{
  console.log('Approve request:',req.body);
  res.send({ok:true});
});

app.post('/api/complete',(req,res)=>{
  console.log('Complete request:',req.body);
  res.send({ok:true});
});

app.post('/api/escrow/create',(req,res)=>{
  console.log('Escrow create:',req.body);
  res.send({status:'escrow created'});
});

app.post('/api/escrow/release',(req,res)=>{
  console.log('Escrow release');
  res.send({status:'released'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log('Server running on '+PORT));
