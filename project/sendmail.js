var nodemailer = require('nodemailer');
var fs = require('fs')


function readfile(callback){
    var info = [];
    fs.readFile('maillist.json','utf-8',function(err,data){
        if(err){
            callback(err,info);
            return;
        }
        info = JSON.parse(data); // convert string to JSON
        callback(err,info);
    })
}

exports.send = function(callback){
    readfile(function(err,data){
        if(err){
            callback(err,'fail in maillist');
            return;
        }
        var arr = [];
        for(var i=0;i<data.length;i++){
            arr.push(data[i].mail);
        }
        var receiver = arr.join(); //convert array into string
        //create object using SMTP transport
        var transporter = nodemailer.createTransport('smtps://amo30827@gmail.com:m2i0c8h2a8el@smtp.gmail.com');
        var mailOptions = {
            from : "amo30827@gmail.com" , //sender e-mail address
            to : receiver , // receiver e-mail address
            subject : 'find new push',
            text : 'New commit in KyrieSu/Crawler',
            html : '<a href = "https://github.com/KyrieSu/Crawler"> New commit in KyrieSu/Crawler </a>'
        };
        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                callback(err,'fail in sendMail');
                return;
            }
            callback(err,'success');
        });
    })
}
