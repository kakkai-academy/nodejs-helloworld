require('dotenv').config();
const app = require('http').createServer((req, res) => res.send('Ahoy!'));

// set port, listen for requests
//const PORT = process.env.PORT || 3000;
const HELLO = process.env.MY_VARIABLE || 'Hello World';
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log("Varaible is: " ,HELLO);
});

