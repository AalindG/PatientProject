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
        // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", "true");
    next();
}
app.all('*', allowCrossDomain);
app.use(cors());




// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
// // parse application/json
// app.use(bodyParser.json());
// app.use(bodyParser({limit: '50mb'}));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// setting routes
let patient = require('./server/routes/patient');
let discrete = require('./server/routes/discrete.values');
app.use('/discrete-data', discrete);
app.use('/', patient);



// Point static path to public
// app.set('views','/dist');
app.use(express.static(path.join(__dirname, 'dist')));
app.set('views', path.join(__dirname, 'dist'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './uploads/images/',
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  // Init Upload
  var upload = multer({ storage : storage});

// Upload API
app.post("/upload/picture", function(req, res) {
    
    // upload(req, res, function(err) {
        // if (err) {
            // return res.end("Something went wrong!");
        // }
        console.log('-----------------', req.body.FileData);
        
        var base64Data = req.body.FileData.replace(/^data:image\/png;base64,/, "");

        require("fs").writeFile("./uploads/images/out.png", base64Data, 'base64', function(err) {
        console.log(err);
        });


        // let fs = require('fs');
        // var decodedImage = new Buffer(JSON.parse(req.body.FileData), 'base64').toString('binary');
        // fs.writeFile('./uploads/images/image_decoded.jpg', decodedImage, function(err) {
        //     console.log('err writing file: ', err);
        // });

        res.redirect('/');
        // res.end("File uploaded successfully!!: ");
    });
// });

// app.post('/upload/picture', function(req, res) {
//     upload(req,res,function(err){
//         console.log(req.file);
//         if(err){
//              res.json({error_code:1,err_desc:err});
//              return;
//         }
//          res.json({error_code:0,err_desc:null});
//     });
// });

// app.post('/upload/picture', (req, res) => {
//     upload(req, res, (err) => {
//       if(err){
//         res.render('index.html', {
//           msg: err
//         });
//       } else {
//         if(req.file == undefined){
//           res.render('index.html', {
//             msg: 'Error: No File Selected!'
//         });
//         console.log('err in file upload');
//         } else {
//           res.render('index.html', {
//             msg: 'File Uploaded!',
//             file: `uploads/${req.file.filename}`
//           });
//         console.log('nice');
//         res.json('uploaded')
//         }
//       }
//     });
//   });

// Start Server
app.listen(port, ()=>{
    console.log('Server is up on port ', port);
})