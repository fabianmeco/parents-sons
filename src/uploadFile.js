const config = require('config');
const aws = require('aws-sdk');
const fs = require('fs')
const forecast = require('forecast')

const s3 = new aws.S3(config.s3);
const forecst = new forecast({ 
    service: 'darksky',
    key: 'a840173d000d48e1e0968786596f134f',
    units: 'celcius'
});

exports.loopUploadFile = function(){
    let key = 'projectfiles/'+Date.now().toString()+'.txt'
    forecst.get([7.8942, -72.5039], true, function(err, weather){
        if(err){
            console.log(err)            
        }
        fs.writeFile(key, JSON.stringify(weather), (error)=>{
            if(error){
                console.log(error)
            }
            fs.readFile(key, function(err, data){
                s3.putObject({Key: key, Body: data, Bucket: 'fabianparentsfiles'}, function(errore, value){
                    if(errore){
                        console.log(errore)
                    }
                    console.log('uploaded')
                })
            })       
        })
    })
   
}