var nodemailer = require('nodemailer');
var fs = require('fs')
//exports.sendmail = function(){
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
        var str = '';
        for(var i=0;i<data.length;i++){
            str += data[i].mail;
        }
        var reciever = str.replace(/ /g,','); // reciever format
        //create object using SMTP transport
        var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
        /*var transporter = nodemailer.createTransport({
            service : 'gmail',
            auth:{
                user : 'amo3082˙',
                pass : 'm2i0c8h2a8EL'
            }
        });*/
        var mailOptions = {
            from : "amo30827@gmail.com" , //sender e-mail address
            to : reciever , // receiver e-mail address
            subject : 'find new push',
            text : 'New commit in KyrieSu/Crawler',
            html : '<a href = "https://github.com/KyrieSu/Crawler">LINK</a>'
        };
        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.log(err);
            }
            console.log(info.response)
        });
    })
}

send()

//}
