import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

//conf template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//set public folder
server.use(express.static(path.join(__dirname, '../public')));

//Routes
server.use(mainRoutes);

server.use((req, res)=>{
    res.send('Page not found!');
});


server.listen(3000);