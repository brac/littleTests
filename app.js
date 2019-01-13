const express       = require('express')
const bodyParser    = require('body-parser')
const app           = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(`${__dirname}/public`))

app.get('/tests', (req, res) => {
  res.send('Welcome to the tests page')
})

app.get('/', (req, res) => {
  res.send('You made it. Nice')
})

app.use((req, res) => {
  res.status(404).send('Not found my dude')
})


const port = process.env.PORT || 3000

if(!module.parent) {
  app.listen(port, () => {
    console.log(`  
      App listening on port: ${port}
      http://localhost:${port}`
    )
  })
}

module.exports= app