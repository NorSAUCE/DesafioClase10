import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import {Server} from 'socket.io'
import viewsRouter from './routes/views.router.js'

const app = express()
app.use(express.static(`${__dirname}/public`))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)

const server = app.listen(8080, () => console.log('server up on port 8080'))

const io = new Server(server)

io.on('connection', socket=>{
    console.log('Nuevo cliente conectado');
})