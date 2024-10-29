const express = require('express')
const playlistRouter = require('./playlist')
const userRouter = require('./user')

const router = express.Router();

router.use('/playlist',playlistRouter)
router.use('/user',userRouter)
module.exports({
    router
})