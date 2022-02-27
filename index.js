import express from "express";
import  mongoose  from "mongoose";
import exphbs from "express-handlebars";
import routes from "./routes/routes.js";
import  path  from "path";
import  fs  from "fs";
import Https  from "https";
import Http from "http";


const PORT = process.env.PORT || 3000



const app = express(); // создаем переменную с функцией express
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})



// const sslServer = Https.createServer({
//     key: fs.readFileSync(path.join('./', 'cert', 'key.pem')),
//     cert: fs.readFileSync(path.join('./', 'cert', 'cert.pem'))
// }, app)

app.use(routes) //регистрируем роут
app.use(express.static(path.join('./', 'public'))) // подключаем статически стили
app.use(express.static('views/images'));
app.use(express.urlencoded({extended: true}))



app.engine('hbs', hbs.engine) // регистриуем переменую с ключом engine в express 1 параметр даем имя, 2 параметр указываем переменую с ключом engine
app.set('view engine', 'hbs') // указываем что по умолчанию будем использовать handlebars
app.set('views', 'views')

// sslServer.listen(PORT, () => {
//     console.log(`The server was started on the port ${PORT}`)
// });
app.listen(3000)