require('dotenv').config();
const app = require('http').createServer((req, res) => res.send('Ahoy!'));

// set port, listen for requests
//const PORT = process.env.PORT || 3000;
const dbUsername = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PWD || 'root';
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log("DB Username is: ", dbUsername);
  console.log("DB Password is: ", dbPassword);
});

