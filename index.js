const express = require('express')
const cors = require('cors')
const DBConnect = require('./DBConnect')
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = express()
const port = process.env.PORT || 5000

const frontendUrl = process.env.FRONTEND_URL;

DBConnect()
app.use(cors({
  origin: ['http://localhost:3000', frontendUrl ]
}));
app.use(express.json())
app.use('/user', require('./Routes/user'))
app.use('/post', require('./Routes/post'))

app.get('/', (req, res) => {
  res.send('Express ON')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})