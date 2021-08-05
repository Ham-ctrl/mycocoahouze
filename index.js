const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8000

const app = express()  //express()
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  //.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
