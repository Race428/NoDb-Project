//server side 

const express = require('express')
const app = express()
const port = 4000
const songList = require('./listOfSongs')

app.use(express.json())
app.listen(port, () =>{
  console.log('listening on', port)
})


app.get('/api/songs',songList.get )
