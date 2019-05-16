const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb+srv://dag171802:dag171802@clustermongo-dgs5s.mongodb.net/test?retryWrites=true", {
//mongoose.connect('mongodb://mongo-server/node-notes-db', {
//mongoose.connect('mongodb://localhost/node-notes-db', {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));