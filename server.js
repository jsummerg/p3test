// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();


/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('website'));

// POST method route
const data = []
app.post('/add', function (req, res) {
    data.push(req.body)
    // let data = req.body
    console.log(data)
    console.log(req.body)
})

// app.post('/', function (req, res) {
//     res.send('POST received')
//   })

// PORT
const PORT = 3000
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})
