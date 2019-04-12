//server side 

const express = require('express')
const app = express()
const SongList = require('./controllers/listOfSongs')
const port = 4000

app.use(express.json())



app.get('/api/songs',SongList.get )
app.post('/api/songs', SongList.create)
app.delete('/api/songs/:id',SongList.delete)
app.put('/api/songs/:id', SongList.update)

app.listen(port, () =>{
  console.log('listening on', port)
})


