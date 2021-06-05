const express = require('express');
require('./db/mongoose');
const path = require('path');

const itemRouter = require('./routers/practiceItem');
const userRouter = require('./routers/user');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.json());

app.use(itemRouter);
app.use(userRouter);

app.listen(port, () => console.log(`Server is up on port ${port}`));
