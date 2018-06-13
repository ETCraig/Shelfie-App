const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const ctrl = require('./Controller');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.get('/api/read_bins/:id', ctrl.getBins)
app.get('/api/read_bin/:id', ctrl.getBin)
app.post('/api/create_bin/:id', ctrl.create)
app.put('/api/update_bin/:id', ctrl.update)
app.delete('/api/delete_bin/:id', ctrl.delete)

const port = process.env.PORT || 3200;
app.listen(port, () => {console.log(`Listening and Oporating on: ${port}`)});