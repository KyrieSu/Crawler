var nodemailer = require('nodemailer');
var fs = require('fs')
exports.sendmail = function(){


function readfile(callback){
    var info = [];
    fs.readFile('maillist.json','utf-8',function(err,data){
        if(err){
            throw err;
            return;
        }
        info = JSON.parse(data); // convert string to JSON
        callback(info);
    })
}

function send(){
    readfile(function(data){
        var reciever = '';
        for(var i=0;i<data.length;i++){
            reciever += data[i].mail;
        }
        //create object using SMTP transport
        var transporter = nodemailer.createTransport('smtps://amo30827@gmail.com:m2i0c8h2a8el@smtp.gmail.com');
        var mailOptions = {
            from : "watermelo0326@gmail.com" , //sender e-mail address
            to : reciever , // receiver e-mail address
            subject : 'find new push',
            text : 'New commit in KyrieSu/Crawler',
            html : '<a href = "https://github.com/KyrieSu/Crawler"> New commit in KyrieSu/Crawler </a>'
        };
        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.log(err);
            }
            console.log(info.response)
        });
    })
}

}
