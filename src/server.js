const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database.config');
const userRoutes = require('./routes/users.routes');

db.authenticate()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log('Error: ' + error);
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

db.sync()
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((error) => console.log('Error: ' + error));

app.get('/', (req, res) => {
  res.send('Hello');
});
