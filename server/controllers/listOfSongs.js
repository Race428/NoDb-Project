let id = 1
let listOfSongs = [
  {
  id: id++,
  name: "song 1",
  artist: "artist 1"
},
{
  id: id++,
  name: "song 2",
  artist: "artist 2"
},
{
  id: id++,
  name: "song 3",
  artist:"artist 3"
}

]

module.exports = { 
  get: (req,res) => { 
    res.send(listOfSongs)
  },
  create: (req, res) => {
    let newSong = req.body 
    newSong.id = id++

    listOfSongs.push(newSong)
    res.send(listOfSongs)
  },

  delete: (req, res ) => {
    let id = req.params.id
    console.log(id)
    let index = listOfSongs.findIndex((song) => { 
      return +req.params.id === +song.id
        
      
    })
  
    console.log(index)
   
   listOfSongs.splice(index,1) 
   res.status(200).send(listOfSongs)

  },

  update: (req, res) => {
    
    let { id } = req.params
    let editSong = req.body
  

    let index = listOfSongs.findIndex(a => +a.id === +id)
    listOfSongs.splice(index,1, editSong)
    res.send(listOfSongs)
  }



}
