// ============
// DEPENDENCIES
// ============

const express = require('express')
const app = express()

//============
//Middleware
//=============
app.use(express.json())


//=========
//ROUTES
//=========
app.get('/', (req, res) => {
  res.send('Hello World')
})


//===============
// LISTENERS
//===============

app.listen(3000, () => {
  console.log('listening on PORT 3000');
})
