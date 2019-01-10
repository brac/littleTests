const path          = require('path')
const express       = require('express')
const bodyParser    = require('body-parser')
// const config        = process.env.CONFIG_KEY == undefined ? require('./config').key : process.env.CONFIG_KEY
const app           = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(`${__dirname}/public`))

// app.use('/api', apiRoutes)

app.get('/', (req, res, next) => {
    res.send('You made it. nice')
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