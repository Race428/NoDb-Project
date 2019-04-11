let id = 1
let listOfSongs = [
  {
  id: id++,
  "name": "song 1",
  "artist": "artist 1"
},
{
  id: id++,
  "name": "song 2",
  "artist": "artist 2"
},
{
  id: id++,
  "name": "song 3",
  "artist":"artist 3"
}

]

module.exports = { 
  get: (req,res) => { 
    res.send(listOfSongs)
  },
}