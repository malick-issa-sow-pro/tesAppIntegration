const mongoose = require('mongoose')

global.Promise = mongoose.Promise

mongoose.connect('mongodb://127.0.0.1:27017/myapp')
