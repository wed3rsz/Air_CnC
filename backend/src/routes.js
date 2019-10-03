//Insere bibliotecas no sistema
const express = require('express');
const multer = require('multer');

//Recebe as configurações de upload
const uploadConfig = require('./config/upload');

//Insere todos os controllers da aplicação
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

//Insere o express dentro das rotas
const routes = express.Router();

//Faz o upload dentro das imagens
const upload = multer(uploadConfig);

//Session conectando Controller com a View(iniciada no React)
routes.post('/sessions', SessionController.store);

//Spots conectando Controller com a View(iniciada no React)
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
//Upando as thumbnails no spot para cada usuário


routes.get('/dashboard', DashboardController.show);

//Busca o id do usuário para retornar os spots cadastrados na sua aplicação
routes.post('/spots/:spot_id/bookings', BookingController.store)


module.exports = routes;