const mongoose = require('mongoose')
mongoose.connect("")
const songSchema = new mongoose.Schema({
    title :String,
    artist:String,
    url:String,
    by:String
})

const playlist = mongoose.model('song',songSchema)
export const module = {
    playlist
}