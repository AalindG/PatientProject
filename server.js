const express = require('express'),
    path = require('path'),
    cors = require('cors'),
    multer = require('multer'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

const app = express(),
    port = 3000;

app.use(morgan('dev'));

// CORS
var allowCrossDomain = function(req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", "true");
    next();
}
app.all('*', allowCrossDomain);
app.use(cors());




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// setting routes
let patient = require('./server/routes/patient');
let discrete = require('./server/routes/discrete.values');
app.use('/discrete-data', discrete);
app.use('/', patient);


// Point static path to public
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Storage Engine for file uploads
const storage = multer.diskStorage({
    destination: './uploads/images/',
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init Upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 2000000 }
}).single('picture');

// Upload API
app.post('/upload/picture', function(req, res) {
    upload(req,res,function(err){
        console.log(req.file);
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }
         res.json({error_code:0,err_desc:null});
    });
});


// Start Server
app.listen(port, ()=>{
    console.log('Server is up on port ', port);
})