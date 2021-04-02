const express = require('express');
const app = express();
const port = 3030;

const api = require('./router/api');

// 静的コンテンツ
app.use('/static', express.static('public'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// API
app.use('/api', api);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
