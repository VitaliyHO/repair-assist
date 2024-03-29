const express = require("express");
const cors = require('cors');
const logger = require('morgan');
const { tasksRouter, authRouter } = require("./routes/api");
const app = express();

require("dotenv").config();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json())

app.use("/api/tasks", tasksRouter);
app.use("/api/auth", authRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
