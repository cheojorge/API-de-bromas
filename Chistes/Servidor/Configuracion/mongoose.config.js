const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:/chistes_db',{
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => console.log('Connect to the database'))
  .catch(err => console.log('Wrong connecting to the database'))