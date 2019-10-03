//MULTER:
const multer = require('multer'); 
//Upload de imagens com express e node

//Path:
const path = require('path');
//Se locomover dentro do código de forma que não se perca

module.exports = {

    //Disk Storage
    storage: multer.diskStorage({
    //Salva dados no navegador de forma facil
        destination: path.resolve(/* __dirname informa que a pasta de path começa no proprio arquivo */ __dirname, '..', '..' , 'uploads'),
        filename: (req, file, cb) => {

            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            
            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
}