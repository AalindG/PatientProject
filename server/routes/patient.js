const express = require('express'),
    { Client } = require('pg'),
    multer = require('multer'),
    path = require('path');

const router = express.Router(),
    config = require('../config/database'),

// DB Connectivity
client = new Client(config);
client.connect(err=>{
    if (err) {
        console.log('Error in DB connection: ', err);
    }else{
        console.log('DB Connected!');
    }
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


// List patients
router.get('/patients', (req,res) => {
    let query = client.query('Select * from patient', (err,result) => {
        if (err) {
            console.log('Error in select: ', err);
        }else{
            res.json(result.rows)
        }
    })
});

// Add a new patient
router.post('/add/patient', (req,res) => {
    // console.log('File: ',req.body.photo);

    // var base64Data = req.body.photo.replace(/^data:image\/png;base64,/, "");

        // require("fs").writeFile(`./uploads/images/${req.body.username}-${Date.now()}.png`, base64Data, 'base64', function(err) {
        // console.log(err);
        // });

    client.query(`INSERT into patient
                                (NAME, LNAME, MNAME,SSN, DOB,GENDER,MARITAL_STATUS,ADDRESS1,ADDRESS2,CITY,STATE,COUNTRY,ZIP_CODE,EMAIL,PHONE,FAX,USER_NAME,PASSWORD,PHOTO,date_created,created_by)
                                VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,MD5($18),$19,$20,$21)`,[req.body.fname, req.body.lname, req.body.mname,req.body.ssn,req.body.dob,req.body.gender,req.body.mstatus,req.body.address1,req.body.address2,req.body.city,req.body.state,req.body.country,req.body.zip,req.body.email,req.body.phone,req.body.fax,req.body.username,req.body.password,req.body.photo,new Date(),'admin']);

    res.status(201);                                
});


// Get a particular patient
router.get('/update/:id', (req,res) => {
    let query = client.query('SELECT * from patient where patient_id = $1', [req.params.id], (err, result) => {
        if (err) {
            console.log('Error fetching a patient data: ', err);
        }else{
            if(result.rows[0].photo){
                result.rows[0].photo = result.rows[0].photo.toString(); 
                console.log('here');
            }
            // console.log(result.rows[0].photo);
            
            res.json(result.rows);
        }
    })
})


//  Update
router.put('/update-patient/:id', (req,res) => {
    console.log('id: ', req.params.id);
    console.log('body: ', req.body);
    client.query(`update patient 
                    SET NAME=$1, LNAME=$2, MNAME=$3,SSN=$4, DOB=$5,GENDER=$6,MARITAL_STATUS=$7,ADDRESS1=$8,ADDRESS2=$9,CITY=$10,STATE=$11,COUNTRY=$12,ZIP_CODE=$13,EMAIL=$14,PHONE=$15,FAX=$16,USER_NAME=$17,PASSWORD=MD5($18),PHOTO=$19,date_modified=$20,modified_by=$21
                    WHERE patient_id=$22`,[req.body.fname, req.body.lname, req.body.mname,req.body.ssn,req.body.dob,req.body.gender,req.body.mstatus,req.body.address1,req.body.address2,req.body.city,req.body.state,req.body.country,req.body.zip,req.body.email,req.body.phone,req.body.fax,req.body.username,req.body.password,req.body.photo,new Date(),'admin', req.params.id], 
        (err,result)=> {
            if (err) {
                console.log(err);
            }else{
                res.status(201);
            }
        }); // Query ends here
});


// Delete
router.delete('/delete/:id', (req,res)=>{
//   console.log('params: ', req.params);  
  client.query('DELETE from patient where patient_id = $1', [req.params.id]);
  let count = client.query('SELECT MAX( patient_id ) FROM patient', (err,result) => {
    if (err) {
        console.log('Error in select: ', err);
    }else{
        // reset counter after deleting the user
        client.query(`SELECT setval(pg_get_serial_sequence('patient', 'patient_id'), MAX(patient_id)) FROM patient`, (err,result)=>{
            if (err) {
                console.log('Error in alter request: ',err);
            }else{
                res.status(201);
            }
        });
    }
});
});

// Check if user exists
router.get('/check/:user', (req,res) => {
    console.log('t: ', req.params.user);
    client.query('SELECT exists (SELECT 1 FROM patient WHERE user_name = $1 LIMIT 1)',[req.params.user], (err,result)=>{
        if (err) {
            console.log('Error checking user: ',err);
        }else{
            console.log('check user :',result.rows[0].exists);
            res.json(result.rows[0].exists);
        }
    })
})



module.exports = router;