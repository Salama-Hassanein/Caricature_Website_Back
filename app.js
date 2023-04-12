const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
// const config = require("./config");
const dbConnection = require("./config/db_config");
const PORT = process.env.PORT;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
// mongoose.connect(config.mongoUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully');
// });

// Routes
const artistsRouter = require("./routes/artists");
const authorsRouter = require("./routes/authors");
const caricaturesRouter = require("./routes/caricatures");
const charactersRouter = require("./routes/characters");

app.use("/artists", artistsRouter);
app.use("/authors", authorsRouter);
app.use("/caricatures", caricaturesRouter);
app.use("/characters", charactersRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// const PORT = config.port;
app.listen(PORT, (err) => {
  if (!err) {
    console.log(
      `*-----------------Server running on ${PORT}------------------*`
    );
    dbConnection;
  } else {
    console.log(`*-----------------Error in Server---------------*`);
  }
});

/*
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const artistsRouter = require('./routes/artists');
const authorsRouter = require('./routes/authors');
const caricaturesRouter = require('./routes/caricatures');
const charactersRouter = require('./routes/characters');

app.use('/artists', artistsRouter);
app.use('/authors', authorsRouter);
app.use('/caricatures', caricaturesRouter);
app.use('/characters', charactersRouter);

// Database connection
mongoose.connect('mongodb://localhost/caricature', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log('Error connecting to database:', error));

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));

*/
