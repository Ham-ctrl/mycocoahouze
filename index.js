const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8000

const app = express()  //express()
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  //.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.use(express.json());

//Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'aboutIndexin' }));  //Here is displaying BUT when there is diff anada RO
app.set('view engine', 'handlebars');

//Handlebars the separated method

//Body Parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'seconPublic')))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
