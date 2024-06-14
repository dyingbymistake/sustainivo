const mongoose = require('mongoose');

const uri = 'mongodb+srv://2906saiL:2906saiL@cluster0.xtv46x6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas!');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

module.exports = mongoose;
