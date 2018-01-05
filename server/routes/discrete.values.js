const express = require('express'),
    { Client } = require('pg');

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

// get data
router.get('/', (req,res) => {
    let query = client.query('Select * from discrete_attribute', (err, result)=>{
        if (err) {
            console.log('Error fetching values from discrete table');
        }else{
            // console.log(result.rows);
            res.json(result.rows)
        }
    })
});

// Add City
router.post('/add/city', (req,res) => {
    console.log('post to city: ',req.body);
    client.query(`Insert into discrete_attribute
                (attribute_name,attribute_value,date_created,created_by) values('CITY_LIST',$1,$2,'INDxAdmin')`,[req.body.city,new Date()]);
})

// Add State
router.post('/add/state', (req,res) => {
    console.log('post to country: ',req.body);
    client.query(`Insert into discrete_attribute
                (attribute_name,attribute_value,date_created,created_by) values('STATE_LIST',$1,$2,'INDxAdmin')`,[req.body.state,new Date()]);
})

// Add Country
router.post('/add/country', (req,res) => {
    console.log('post to country: ',req.body);
    client.query(`Insert into discrete_attribute
                (attribute_name,attribute_value,date_created,created_by) values('COUNTRY_LIST',$1,$2,'INDxAdmin')`,[req.body.country,new Date()]);
})


module.exports = router;