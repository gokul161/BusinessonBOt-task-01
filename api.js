const express= require('express');
const app=express();
const pool=require('./db');
const cors = require('cors')

app.use(cors())

app.use(express.json());
const PORT=process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


app.get('/api/branches/autocomplete',async(req,res)=>{

  try{
    const allBranches= await pool.query(`SELECT * FROM bankdetails WHERE branch LIKE $1 || '%' ORDER BY ifsc ASC OFFSET $2 LIMIT $3`,[req.query.q, req.query.offset, req.query.limit]);
  
    res.json(allBranches.rows);

  }catch(e){
    res.send(e);

  }

});



app.get('/api/search',async(req,res)=>{
  
 
  try{
    const allBranches= await pool.query(`SELECT * FROM bankdetails WHERE city = $1 ORDER BY ifsc ASC OFFSET $2 LIMIT $3`,[req.query.q, req.query.offset, req.query.limit]);
    res.json(allBranches.rows);

  }catch(e){
    res.send(e);

  }

});

