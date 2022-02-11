require('dotenv').config();
const app = require('http').createServer((req, res) => res.send('Ahoy!'));

// set port, listen for requests
//const PORT = process.env.PORT || 3000;
process.env.MY_VARIABLE = 'Hello world';
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

