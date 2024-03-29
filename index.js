const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000
app.use(cors())

app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.use('/', (req, res) => {
  res.json({"message": "App deployed successfully"})
})


app.listen(port, () => {
  console.log(`iNoteBook backend listening in https://notecraft-back.vercel.app/`)
})
